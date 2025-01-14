import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

export default function First({ current, setCurrent }) {
  return (
    <div className=" bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center">
      <div className=" w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between">
        <div>
          <Header />
          <Input
            temp="Email *"
            placeholder="Your email"
            error="Мэйл хаягаа оруулна уу "
          />
          <Input
            temp="Phone number *"
            placeholder="Your phone number"
            error="Утасны дугаараа оруулна уу."
          />
          <Input
            temp="Password *"
            placeholder="Your password"
            error="Нууц үгээ оруулна уу"
          />
          <Input
            temp="Confirm password *"
            placeholder="Confirm password"
            error=" Нууц үгээ давтаж оруулна уу"
          />
        </div>

        <Button current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}
