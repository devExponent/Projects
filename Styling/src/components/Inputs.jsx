export default function Inputs({ label, invalid, ...props }) {
  let labelClass =
    "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  if (invalid) {
    labelClass +=
      " block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300 background-green";
  }
  return (
    <>
      <p>
        <label className={labelClass}>{label}</label>
        <input
          className="px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300"
          {...props}
        />
      </p>
    </>
  );
}
