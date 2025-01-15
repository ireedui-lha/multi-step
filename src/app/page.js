"use client";
import Image from "next/image";
import Header from "./component/Header";
import Input from "./component/Input";
import { FunctionSquareIcon } from "lucide-react";
import Second from "./component/First";
import First from "./component/Second";
import { useState } from "react";
import Third from "./component/Third";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const Formstep = [Second, First, Third][current];
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });
  const [userInfoError, setUserInfoError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    setUserInfoError((prev) => ({ ...prev, [name]: "" }));
  };
  const clickNext = () => {
    setCurrent(current + 1);
  };
  const clickBack = () => {
    setCurrent(current - 1);
  };
  // const handleClick = () => {
  //   let Error = false;
  //   const { firstName, lastName, userName } = userInfo;
  //   if (!firstName.trim()) {
  //     setUserInfoError((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу" }));
  //     Error = true;
  //   }
  //   if (!lastName.trim()) {
  //     setUserInfoError((prev) => ({ ...prev, lastName: "Овгоо оруулна уу" }));
  //     Error = true;
  //   }
  //   if (!userName.trim()) {
  //     setUserInfoError((prev) => ({
  //       ...prev,
  //       userName: "Хэрэглэгчийн нэрээ оруулна уу",
  //     }));
  //     Error = true;
  //   }
  // if (!email) {
  //   setUserInfoError((prev) => ({
  //     ...prev,
  //     email: " Мэйл хаягаа оруулна уу",
  //   }));
  //   Error = true;
  // }
  // if (!userInfo.phoneNumber) {
  //   setUserInfoError((prev) => ({
  //     ...prev,
  //     phoneNumber: "Утасны дугаараа оруулна уу",
  //   }));
  //   Error = true;
  // }
  // if (!userInfo.password) {
  //   setUserInfoError((prev) => ({
  //     ...prev,
  //     password: "Нууц үгээ оруулна уу ",
  //   }));
  //   Error = true;
  // }
  // if (!userInfo.confirmPassword) {
  //   setUserInfoError((prev) => ({
  //     ...prev,
  //     confirmPassword: "Нууц үгээ давтаж оруулна уу",
  //   }));
  //   Error = true;
  // }

  //   if (Error == false) {
  //     setCurrent(current + 1);
  //   }
  // };

  return (
    <div>
      <Formstep
        clickBack={clickBack}
        clickNext={clickNext}
        setUserInfoError={setUserInfoError}
        // handleClick={handleClick}
        userInfoError={userInfoError}
        handleChange={handleChange}
        userInfo={userInfo}
      />
    </div>
  );
}
