"use client";

import Second from "./component/First";
import First from "./component/Second";
import { useState } from "react";
import Third from "./component/Third";
import Last from "./component/Last";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
export default function Home() {
  const [current, setCurrent] = useState(0);
  const Formstep = [Second, First, Third, Last][current];
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    day: "",
    year: "",
  });
  const [userInfoError, setUserInfoError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    day: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value, date, year } = event.target;
    console.log(name, value);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    setUserInfo((prev) => ({ ...prev, [date]: value }));
    setUserInfo((prev) => ({ ...prev, [year]: value }));
    setUserInfoError((prev) => ({ ...prev, [name]: "" }));
    setUserInfoError((prev) => ({ ...prev, [date]: "" }));
    setUserInfoError((prev) => ({ ...prev, [year]: "" }));
  };
  const clickNext = () => {
    setCurrent(current + 1);
  };
  const clickBack = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <AnimatePresence initial={false}>
        <Formstep
          clickBack={clickBack}
          clickNext={clickNext}
          setUserInfoError={setUserInfoError}
          // handleClick={handleClick}
          userInfoError={userInfoError}
          handleChange={handleChange}
          userInfo={userInfo}
        />
      </AnimatePresence>
    </div>
  );
}
