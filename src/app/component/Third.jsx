import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import { ChevronLeft } from "lucide-react";
import * as motion from "motion/react-client";
export default function Third({
  clickNext,
  clickBack,
  userInfoError,
  setUserInfoError,
  userInfo,
}) {
  const [file, setFile] = useState(null);
  const [formvalue, setformvalue] = useState({
    birthdate: "",
    profileImage: "",
  });
  const [formvalueerror, setformvalueerror] = useState({
    birthdate: "",
    profileImage: "",
  });

  const handleFileChange = (e, prev) => {
    const uploadedFile = e.target.files[0];
    setFile(URL.createObjectURL(uploadedFile));
  };

  return (
    <div className="bg-[#F4F4F4] h-[100vh] w-[100vw] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 1 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-[480px] h-[655px] bg-[#FFF] rounded-[8px] p-[32px] flex flex-col justify-between"
      >
        <div>
          <Header />
          <div className="flex  ">
            <p className="text-[15px] text-[#334155] font-bold">
              Date of Birth
            </p>
            <p className="text-red-400">*</p>
          </div>
          <input
            name="day"
            className="border-2 w-[416px] h-[46px] rounded-md mb-4"
            type="date"
          />

          <div className="flex">
            <p className="font-bold text-[#334155]">Profile image</p>
            <p className="text-red-400">*</p>
          </div>

          <div className="border-2 border-dashed w-[416px] h-[180px] rounded-md flex flex-col items-center justify-center bg-[#F9FAFB] mb-4">
            {file ? (
              <p className="text-gray-600">{file.name}</p>
            ) : (
              <>
                {/* <p className="text-gray-500">Drag & drop your file here</p>
                <p className="text-gray-400">or</p> */}
                <label
                  htmlFor="fileInput"
                  className="text-blue-500 cursor-pointer"
                >
                  Choose file
                </label>
              </>
            )}

            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <img src={file} alt="" />
          </div>
        </div>
        <div className="flex w-[416px] gap-2 justify-center items-center">
          <button
            onClick={clickBack}
            className="bg-gray-100 w-[150px] rounded-[8px] h-[44px]  "
          >
            Back
          </button>
          <Button handleClick={clickNext} />
        </div>
      </motion.div>
    </div>
  );
}
