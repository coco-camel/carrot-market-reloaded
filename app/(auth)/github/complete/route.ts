import Login from "@/components/login";
import db from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return notFound();
  }

  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();

  const accessTokenURL = `https://github.com/login/oauth/access_token?${accessTokenParams}`;
  const accessTokenResponse = await fetch(accessTokenURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  const { error, access_token } = await accessTokenResponse.json();
  if (error) {
    return new Response(null, { status: 400 });
  }

  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      cache: "no-cache",
    },
  });

  const userEmailResponse = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      cache: "no-cache",
    },
  });
  const { id, avatar_url, login } = await userProfileResponse.json();
  const emails = await userEmailResponse.json();
  const primaryEmailObj = emails.find((emailObj: any) => emailObj.primary);

  const primaryEmail = primaryEmailObj.email;

  const user = await db.user.findUnique({
    where: { github_id: id + "" },
    select: { id: true },
  });

  if (user) {
    await Login(user);
  } else {
    let username = login;
    const existingUser = await db.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      const randomValue = Math.floor(1000 + Math.random() * 9000);
      username = `${login}${randomValue}`;
    }

    const newUser = await db.user.create({
      data: {
        username,
        github_id: id + "",
        avatar: avatar_url,
        email: primaryEmail,
      },
      select: { id: true },
    });

    await Login(newUser);
  }

  return redirect("/profile");
}
