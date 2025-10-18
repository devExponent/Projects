export default function Inputs({ label, invalid, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass =
    "px-3 py-2 leading-tight  border rounded shadow bg-stone-300 w-full";

  if (invalid) {
    labelClass += " text-red-400";
    inputClass += " text-red-700";
  } else {
    labelClass += " text-stone-300";
    inputClass += " text-gray-700";
  }

  return (
    <>
      <p>
        <label className={labelClass}>{label}</label>
        <input className={inputClass} {...props} />
      </p>
    </>
  );
}
