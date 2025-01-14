export default function Button({ handleClick }) {
  return (
    <div className="bg-[#121316] text-white h-[44px] w-[416px] rounded-[6px] flex items-center justify-center ">
      <button
        className=" ps-2.5 px-3 text-base font-bold"
        onClick={handleClick}
      >
        contine
      </button>
    </div>
  );
}
