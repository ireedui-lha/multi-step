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
  });
  const [userInfoError, setUserInfoError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    let Error = false;

    if (!userInfo.firstName) {
      setUserInfoError((prev) => ({ ...prev, firstName: "" }));
      Error = true;
    }
    if (!userInfo.lastName) {
      setUserInfoError((prev) => ({ ...prev, lastName: "" }));
      Error = true;
    }
    if (!userInfo.userName) {
      setUserInfoError((prev) => ({ ...prev, userName: "" }));
      Error = true;
    }
    if (Error == false) {
      setCurrent(current + 1);
    }
  };

  return (
    <div>
      <Formstep
        handleClick={handleClick}
        userInfoError={userInfoError}
        current={current}
        setCurrent={setCurrent}
        handleChange={handleChange}
      />
    </div>
  );
}
