export default function Login() {
  return (
    <main className="bg-gray-100 grid grid-cols-3 w-full h-screen p-5 ">
      <div className="flex flex-col">
        <div>img</div>
        <div>
          <input
            className=" rounded-full py-3 h-10 border-gray-200 border-2 pl-5 outline-none ring ring-transparent focus:ring-gray-200 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
            type="email"
            placeholder="Email"
          />
          <input
            className=" rounded-full py-3 h-10 border-gray-200 border-2 pl-5 outline-none ring ring-transparent focus:ring-gray-200 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
            type="text"
            placeholder="Username"
          />
          <input
            className=" rounded-full py-3 h-10 border-gray-200 border-2 pl-5 outline-none ring ring-transparent focus:ring-gray-200 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="bg-gray-200 text-black py-2 rounded-full hover:bg-gray-300 active:scale-90 transition-transform font-semibold outline-none">
          Log in
        </button>
      </div>
    </main>
  );
}
