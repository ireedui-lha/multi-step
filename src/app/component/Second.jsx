import { ChevronLeft } from "lucide-react";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
import * as motion from "motion/react-client";
export default function First({
  handleClick,
  handleChange,
  userInfoError,
  clickNext,
  userInfo,
  setUserInfoError,
  clickBack,
  userInfovalue,
}) {
  const SecondErr = () => {
    let Error = false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email.trim())) {
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
    if (userInfo.phoneNumber.length < 8) {
      setUserInfoError((prev) => ({
        ...prev,
        phoneNumber: " Утасны дугаараа оруулна уу",
      }));
      Error = true;
    }
    if (!userInfo.confirmPassword.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        confirmPassword: " Таны оруулсан нууц үг таарахгүй байна.",
      }));
      Error = true;
    } else if (userInfo.confirmPassword !== userInfo.password) {
      setUserInfoError((prev) => ({
        ...prev,
        confirmPassword: " Таны оруулсан нууц үг таарахгүй байна.",
      }));
      Error = true;
    }
    if (!Error) {
      clickNext();
    }
  };
  return (
    <div className=" bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 1, y: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className=" w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between"
      >
        <div>
          <Header />
          <Input
            name="email"
            temp="email *"
            placeholder="Your email"
            error={userInfoError.email}
            handleChange={handleChange}
            userInfovalue={userInfo.email}
          />
          <Input
            name="phoneNumber"
            temp="phoneNumber *"
            placeholder="Your phone number"
            error={userInfoError.phoneNumber}
            handleChange={handleChange}
            userInfovalue={userInfo.phoneNumber}
          />
          <Input
            name="password"
            temp="password *"
            placeholder="Your password"
            error={userInfoError.password}
            handleChange={handleChange}
            type="password"
            userInfovalue={userInfo.password}
          />
          <Input
            name="confirmPassword"
            temp="confirmPassword *"
            placeholder="Confirm password"
            error={userInfoError.confirmPassword}
            handleChange={handleChange}
            userInfovalue={userInfo.confirmPassword}
            type="password"
          />
        </div>
        <div className="flex w-[416px] gap-3 ">
          <button
            onClick={clickBack}
            className="bg-white h-[44px] w-[128px] rounded-md border-2 border-[#CBD5E1]  "
          >
            Back
          </button>
          <Button handleClick={SecondErr} />
        </div>
      </motion.div>
    </div>
  );
}
