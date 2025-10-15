import Image from "next/image";
import img from "@/app/comp/imgs/logo.png";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
// const local = process.env.LOCAL as string;

const Signup = async () => {
  const createUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phone");
    const password = formData.get("password") as string;
    await axios
      .post("http://localhost:3000/api/register", {
        name,
        email,
        phoneNumber,
        password,
      })
      .then((res) => {
        console.log(res.data);
        redirect("/email");
      });
    // await fetch("http://localhost:3000/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, phoneNumber, password }),
    // }).then((res) => {
    //   console.log("User creation Done");
    //   console.log(res.json());
    // });

    // console.log(name, email, password, phoneNumber);
  };

  return (
    <div className="flex w-full px-[20px] justify-center h-screen items-center">
      <div className="flex flex-col gap-3 w-full bg-[#442ACA] md:w-[40%] shadow-2xl rounded-md p-3">
        <div className="w-full flex justify-center items-center">
          <Image src={img} alt="#" className="text-center w-[90px] h-[60px]" />
        </div>

        <form action={createUser} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
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
              required
              className="rounded-md p-2 bg-[#16077F]"
              placeholder="Your Password"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-amber-600 to-amber-500 p-2 rounded-full text-white text-[20px]"
          >
            Register
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
