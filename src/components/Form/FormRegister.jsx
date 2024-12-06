import Button from "../Button";

export default function FormRegister() {
  return (
    <form action="">
      <div className="mb-6">
        <label htmlFor="fullname" className="block mb-2 text-sm font-bold text-slate-700">
          Fullname
        </label>
        <label htmlFor="email" className="block mb-2 text-sm font-bold text-slate-700">
          Email
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg placeholder:opacity-50"
          placeholder="Enter your email"
        />
      </div>

      <label htmlFor="password" className="block mb-2 text-sm font-bold text-slate-700">
        Password
      </label>
      <input type="password" className="w-full p-2 border rounded-lg placeholder:opacity-50" placeholder="****" />

      <Button variant="bg-yellow-500 w-full">Login</Button>
    </form>
  );
}
