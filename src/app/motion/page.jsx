"use client";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
export default function Montion() {
  const [isVisible, setIsVisible] = useState(true);
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  return (
    <div className="flex bg-black w-[100vw] h-[100vh]">
      <div className="flex flex-col relative w-[100] h-[160px]">
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className=" w-[100px] h-[100px] bg-[#0cdcf7] rounded-[10px] "
              key="box"
            />
          ) : null}
        </AnimatePresence>
        <motion.button
          className=" bg-[#0cdcf7] rounded-[10px] text-[#0f1115] absolute bottom-0 left-0 right-0 "
          onClick={() => setIsVisible(!isVisible)}
          whileTap={{ y: 1 }}
        >
          {isVisible ? "Hide" : "Show"}
        </motion.button>
      </div>
      <div style={{ position: "relative" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
          <motion.path
            d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
            fill="transparent"
            strokeWidth="12"
            stroke="var(--hue-6-transparent)"
            strokeLinecap="round"
            initial={{ pathLength: 0.001 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
        <motion.div
          style={{
            offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
          }}
          className=" w-[50px] h-[50px] bg-[#4ff0b7] rounded-[10px] absolute top-0 left-0"
          initial={{ offsetDistance: "0%", scale: 2.5 }}
          animate={{ offsetDistance: "100%", scale: 1 }}
          transition={transition}
        />
      </div>
    </div>
  );
}
