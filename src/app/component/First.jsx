import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

export default function Second({
  current,
  setCurrent,
  handleChange,
  userInfoError,
  handleClick,
}) {
  return (
    <div className="bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center ">
      <div className="w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between">
        <div>
          <Header />
          <Input
            name="firstName"
            onChange={handleChange}
            temp="First name *"
            placeholder="Your first name"
            error={userInfoError.firstName}
          />
          <Input
            name="firstName"
            onChange={handleChange}
            temp="Last name *"
            placeholder="Your last name"
            error={userInfoError.lastName}
          />
          <Input
            name="firstName"
            onChange={handleChange}
            temp="Username *"
            placeholder="Your username"
            error={userInfoError.userName}
          />
        </div>
        <Button
          handleClick={handleClick}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
}
