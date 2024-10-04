import getSession from "@/lib/session";
import { redirect } from "next/navigation";

interface loginProps {
  id: number;
  email?: string;
  github_id?: string;
  avatar?: string;
}

export default async function Login(user: loginProps) {
  const session = await getSession();
  session.id = user.id;
  await session.save();
  return redirect("/profile");
}
