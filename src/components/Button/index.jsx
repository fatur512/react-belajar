export default function Button(props) {
  const { children, variant } = props;
  return (
    <div>
      <button className={`p-2 text-white ${variant} rounded-lg`} type="submit">
        {children}
      </button>
    </div>
  );
}
