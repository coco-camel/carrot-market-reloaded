export default function Login() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 ">
      <div className="p-5 w-3/5 max-w-screen-sm flex flex-col gap-2">
        <div>img</div>
        <input
          className="w-full rounded-full py-3 h-10 border-gray-200 border-2 pl-5 outline-none ring ring-transparent focus:ring-gray-200 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full rounded-full py-3 h-10 border-gray-200 border-2 pl-5 outline-none ring ring-transparent focus:ring-gray-200 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full rounded-full py-3 h-10 border-gray-200 border-2 pl-5 outline-none ring ring-transparent focus:ring-gray-200 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="password"
          placeholder="Password"
        />
        <button className="bg-gray-200 text-black py-2 rounded-full hover:bg-gray-300 active:scale-90 transition-transform font-semibold outline-none">
          Log in
        </button>
      </div>
    </main>
  );
}
