"use client";
import Image from "next/image";
import img from "@/app/comp/imgs/logo.png";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
import { createUser } from "../authentications/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { setLoading } from "@/app/global/redux";
// import { ClipLoader } from "react-spinners";
interface iState {
  loading: boolean;
  notification: boolean;
}
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const loading = useSelector((state: iState) => {
    return state.loading;
  });
  const dispatch = useDispatch();
  const create = () => {
    setTimeout(() => {
      createUser({ name, email, password, phoneNumber }).then(() => {
        dispatch(setLoading(false));
        redirect("/email");
      });
    }, 1000);
  };
  return (
    <div className="flex w-full px-[20px] justify-center h-screen items-center">
      <div className="flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3">
        <div className="w-full flex justify-center items-center">
          <Image src={img} alt="#" className="text-center w-[90px] h-[60px]" />
        </div>

        <form action={create} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              className="rounded-md p-2 bg-[#16077F]"
              placeholder="E.g: John Doe"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              required
              className="rounded-md p-2 bg-[#16077F]"
              placeholder="+123456789"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">Bitcoin Address</label>
            <input
              type="text"
              required
              className="rounded-md p-2 bg-[#16077F]"
              placeholder="E.g: oweinskldjnowi "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">Email Address</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="rounded-md p-2 bg-[#16077F]"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="rounded-md p-2 bg-[#16077F]"
              placeholder="Your Password"
            />
          </div>

          <button
            onClick={() => {
              if (
                email == "" &&
                name == "" &&
                password == "" &&
                phoneNumber == ""
              ) {
                dispatch(setLoading(false));
              } else {
                dispatch(setLoading(true));
                console.log("clicked");
              }
            }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 p-2 rounded-full text-white w-full text-[20px]"
          >
            {loading ? (
              <BeatLoader
                color={"white"}
                loading={loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="flex items-center gap-1 w-full justify-center text-[12px]">
          <p>Already have an account? </p>
          <Link href={"/login"} className="italic underline text-blue-400">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
