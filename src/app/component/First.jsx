import Error from "next/error";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

export default function Second({
  handleChange,
  userInfoError,
  handleClick,
  setUserInfoError,
  clickNext,
  userInfo,
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
      <div className="w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between">
        <div>
          <Header />
          <Input
            name="firstName"
            temp="first name *"
            placeholder="Your first name"
            error={userInfoError.firstName}
            handleChange={handleChange}
          />
          <Input
            name="lastName"
            temp="last name *"
            placeholder="Your last name"
            error={userInfoError.lastName}
            handleChange={handleChange}
          />
          <Input
            name="userName"
            temp="username *"
            placeholder="Your username"
            error={userInfoError.userName}
            handleChange={handleChange}
          />
        </div>
        <Button handleClick={buttonClick} />
      </div>
    </div>
  );
}
