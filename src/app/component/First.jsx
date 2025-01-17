import Error from "next/error";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
import * as motion from "motion/react-client";

export default function Second({
  handleChange,
  userInfoError,
  handleClick,
  setUserInfoError,
  clickNext,
  userInfo,
  userInfovalue,
}) {
  const buttonClick = () => {
    let Error = false;
    if (!userInfo.firstName.trim()) {
      setUserInfoError((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу" }));
      Error = true;
    }
    if (!userInfo.lastName.trim()) {
      setUserInfoError((prev) => ({ ...prev, lastName: "Овгоо оруулна уу" }));
      Error = true;
    }
    if (!userInfo.userName.trim()) {
      setUserInfoError((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
      Error = true;
    }

    if (Error == false) {
      clickNext();
    }
  };

  return (
    <div className="bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 1, y: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between"
      >
        <div>
          <Header />
          <Input
            name="firstName"
            temp="first name *"
            placeholder="Your first name"
            error={userInfoError.firstName}
            handleChange={handleChange}
            userInfovalue={userInfo.firstName}
          />
          <Input
            name="lastName"
            temp="last name *"
            placeholder="Your last name"
            error={userInfoError.lastName}
            handleChange={handleChange}
            userInfovalue={userInfo.lastName}
          />
          <Input
            name="userName"
            temp="username *"
            placeholder="Your username"
            error={userInfoError.userName}
            handleChange={handleChange}
            userInfovalue={userInfo.userName}
          />
        </div>

        <Button handleClick={buttonClick} />
      </motion.div>
    </div>
  );
}
