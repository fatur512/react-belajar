export default function AuthLayout(props) {
  const { children, title } = props;
  return (
    <div className="w-full max-w-md p-8 bg-white rounded shadow-md ">
      <h1 className="mb-2 text-xl font-bold text-yellow-500">{title}</h1>
      <p className="text-gray-400 ">welcome back! please login.</p>
      {children}
    </div>
  );
}
