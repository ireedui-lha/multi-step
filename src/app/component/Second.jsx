import { ChevronLeft } from "lucide-react";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

export default function First({
  handleClick,
  handleChange,
  userInfoError,
  clickNext,
  userInfo,
  setUserInfoError,
  clickBack,
}) {
  const SecondErr = () => {
    let Error = false;
    if (!userInfo.email.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        email: "  Мэйл хаягаа оруулна уу",
      }));
      Error = true;
    }
    if (!userInfo.password.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        password: " Нууц үгээ оруулна уу ",
      }));
      Error = true;
    }
    if (!userInfo.phoneNumber.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        phoneNumber: " Утасны дугаараа оруулна уу",
      }));
      Error = true;
    }
    if (!userInfo.confirmPassword.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        confirmPassword: " Нууц үгээ оруулна уу",
      }));
      Error = true;
    }
    if (!Error) {
      clickNext();
    }
  };
  return (
    <div className=" bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center">
      <div className=" w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between">
        <div>
          <Header />
          <Input
            name="email"
            temp="email *"
            placeholder="Your email"
            error={userInfoError.email}
            handleChange={handleChange}
          />
          <Input
            name="phoneNumber"
            temp="phoneNumber *"
            placeholder="Your phone number"
            error={userInfoError.phoneNumber}
            handleChange={handleChange}
          />
          <Input
            name="password"
            temp="password *"
            placeholder="Your password"
            error={userInfoError.password}
            handleChange={handleChange}
          />
          <Input
            name="confirmPassword"
            temp="confirmPassword *"
            placeholder="Confirm password"
            error={userInfoError.confirmPassword}
            handleChange={handleChange}
          />
        </div>
        <div className="flex w-[416px] gap-3 ">
          <button
            onClick={clickBack}
            className="bg-white h-[44px] w-[128px] rounded-md border-2 border-[#CBD5E1]  "
          >
            <ChevronLeft />
            Back
          </button>
          <Button handleClick={SecondErr} />
        </div>
      </div>
    </div>
  );
}
