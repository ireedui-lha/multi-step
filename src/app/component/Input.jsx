export default function Input({ temp, placeholder, error }) {
  return (
    <div>
      <p className="font-semibold text-sm">{temp}</p>

      <input
        className={`
                  focus:outline-none border rounded-lg p-3 w-[100%] ${
                    error ? "border-[#E14942]" : "focus:border-[#0CA5E9]"
                  }`}
        type="text"
        placeholder={placeholder}
      />
      {error && <p className="text-[#E14942] text-sm mb-[10px]">{error}</p>}
    </div>
  );
}
