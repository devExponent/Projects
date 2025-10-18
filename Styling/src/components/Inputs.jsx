export default function Inputs({ label, invalid, ...props }) {
  const labelClass = "";
  // "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";

  return (
    <>
      <p>
        <label className="text-9xl">{label}</label>
        <input
          className="px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
          {...props}
        />
      </p>
    </>
  );
}
