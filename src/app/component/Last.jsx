import * as motion from "motion/react-client";
export default function Last() {
  return (
    <div className="bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 1 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-[480px] h-[200px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between "
      >
        <img className="h-[60px] w-[60px]" src="/Main 1.png" alt="" />
        <h1 className="text-[#202124] text-3xl font-bold">
          You're All Set! 🔥
        </h1>
        <p className="text-lg text-[#8E8E8E] font-normal mt-[8px]">
          We've received your submission. Thank you!
        </p>
      </motion.div>
    </div>
  );
}
