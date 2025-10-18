import axios from "axios";
import { redirect } from "next/navigation";
import { toast } from "sonner";
export const createUser = async ({
  name,
  email,
  password,
  phoneNumber,
}: any) => {
  // @ts-ignore
  await axios
    .post("http://localhost:3000/api/register", {
      name,
      email,
      phoneNumber,
      password,
    })
    .then((res) => {
      // console.log(res.data);
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

export const handleVerification = async (token: string, userID: any) => {
  // @ts-ignore
  const link = process.env.LOCAL;

  await axios
    .post(`http://localhost:3000/api/verify/${userID}`, { token })
    .then((res: any) => {
      // console.log(res.data.status);
      if (res.data.status !== 200) {
        toast.error("Incorrect Token");
      } else {
        redirect("/verify");
      }
    });
};
