import Footer from "./Footer";
import Input from "./Input";

export default function Header() {
  return (
    <div className=" flex  h-[100vh]">
      <div className="w-[480px] h-[655px] bg-[#FFF] m-auto rounded-[8px] p-[32px] flex-col justify-between items-start">
        <img className="w-[60px] h-[60px]" src="/Main 1.png" alt="" />
        <h1 className="text-[#202124] font-semibold text-[26px] ">
          Join Us! 😎
        </h1>
        <p className="text-[#8E8E8E] font-normal mb-[26px]">
          Please provide all current information accurately.
        </p>

        <Input
          temp="First name *"
          placeholder="Your first name"
          error="Нэрээ оруулна уу"
        />
        <Input
          temp="Last name *"
          placeholder="Your last name"
          error="Овгоо оруулна уу."
        />
        <Input
          temp="Username *"
          placeholder="Your username"
          error="Хэрэглэгчийн нэрээ оруулна уу"
        />
        <Footer />
      </div>
    </div>
  );
}
