"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "@/app/comp/imgs/logo.png";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { handleVerification } from "../../authentications/auth";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/app/global/redux";
import { AlertDemo } from "@/app/comp/alert";
interface iState {
  loading: boolean;
  notification: boolean;
}
const Verify = () => {
  const [token, setToken] = useState("");
  // const [loading, setLoading] = useState(false);
  const loading = useSelector((state: iState) => {
    return state.loading;
  });
  const color = "white";
  // const { userID } = await params;
  const params = useParams();
  const { userID } = params;
  const dispatch = useDispatch();
  // console.log(loading);

  const veri = () => {
    setTimeout(() => {
      handleVerification(token, userID);
      dispatch(setLoading(false));
    }, 1000);
  };
  // console.log(loading);

  return (
    <div className="flex w-full px-[20px] justify-center h-screen items-center">
      <div className="flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3">
        <div className="w-full flex justify-center items-center">
          <Image src={img} alt="#" className="text-center w-[90px] h-[60px]" />
        </div>
        <form action={veri} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">
              Verification Code
            </label>
            <input
              className="outline-none border p-1 rounded-md border-neutral-600 "
              type="text"
              value={token}
              required
              onChange={(e) => {
                setToken(e.target.value);
              }}
            />
            {/* <InputOTP
              name="code"
              onChange={(e) => {
                setToken(e.target.value);
                console.log(token);
              }}
              value={token}
              required
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP> */}
          </div>

          <button
            onClick={() => {
              if (token == "") {
                dispatch(setLoading(false));
              } else {
                dispatch(setLoading(true));
              }
              // console.log("clicked");
            }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 p-2 rounded-full text-white w-full text-[20px]"
          >
            {loading ? (
              <BeatLoader
                color={color}
                loading={loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Verify Email"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
