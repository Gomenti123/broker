import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex w-full px-[20px] justify-center h-screen items-center">
      <div className="flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3">
        <div className="w-full flex justify-center">
          <MdMarkEmailUnread className="text-[50px]" />
        </div>
        <p className="text-[16px] text-neutral-400">
          We've sent a verification code to your email, check your email to
          verify and activate your account. The link in the email will expire in
          24hrs.
        </p>
      </div>
    </div>
  );
};

export default Page;
