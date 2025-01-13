export default function Input({ temp, placeholder }) {
  return (
    <div>
      <p>{temp}</p>
      <input
        className="text-[#334155] border-2 rounded-[8px] w-[400px] h-[50px] p-[12px]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
