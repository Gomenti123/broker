import React from "react";
import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex w-full px-[20px] justify-center h-screen items-center">
      <div className="flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3">
        <div className="w-full flex justify-center">
          <MdOutlineMarkEmailRead className="text-[50px]" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-[20px]">
            <p className="text-amber-600 font-semibold">Congratulations!</p>
            <LuPartyPopper className="text-amber-600" />
          </div>
          <p>Email Verified</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
