import Image from "next/image";
import React from "react";
import img from "@/app/comp/imgs/logo.png";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from "axios";
import { redirect } from "next/navigation";

const Verify = async ({ params }) => {
  const { userID } = await params;
  const handleVerification = async (formData: FormData) => {
    "use server";
    const link = process.env.LOCAL;
    const token = formData.get("code");

    await axios.post(`${link}/verify/${userID}`, { token }).then((res) => {
      console.log(res.data);
      redirect("/verify");
    });
  };

  return (
    <div className="flex w-full px-[20px] justify-center h-screen items-center">
      <div className="flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3">
        <div className="w-full flex justify-center items-center">
          <Image src={img} alt="#" className="text-center w-[90px] h-[60px]" />
        </div>
        <form action={handleVerification} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">
              Verification Code
            </label>
            <InputOTP name="code" required maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button className="bg-gradient-to-r from-amber-600 to-amber-500 p-2 rounded-full text-white text-[20px]">
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
