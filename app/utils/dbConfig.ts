import { connect } from "mongoose";
const URL = process.env.URL as string;
export const dbConfig = async () => {
  await connect(
    "mongodb+srv://Gomenti90:Gomenti90@cluster0.8rifu68.mongodb.net/broker"
  )
    .then(() => {
      console.clear();
      console.log("Server Up!");
    })
    .catch((error) => {
      console.log(error);
    });
};
