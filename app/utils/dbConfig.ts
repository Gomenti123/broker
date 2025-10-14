import { connect } from "mongoose"
const URL = process.env.URL as string
export const dbConfig = async ()=>{
    await connect(URL).then(()=>{
        console.clear()
        console.log("Server Up!")
    }).catch((error)=>{
        console.log(error);
        
    })
}