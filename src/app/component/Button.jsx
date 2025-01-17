import * as motion from "motion/react-client";
export default function Button({ handleClick }) {
  return (
    <div className="bg-[#121316] text-white h-[44px] w-[416px] rounded-[6px] flex items-center justify-center ">
      <button
        // initial={{ opacity: 0, x: -20 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: 20 }}
        // transition={{ duration: 0.6 }}
        className=" ps-2.5 px-3 text-base font-bold"
        onClick={handleClick}
      >
        contine
      </button>
    </div>
  );
}
