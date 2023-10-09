import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import blogRoute from "./routes/blog.route.js"

dotenv.config()
const app = express()
const port = 3000
app.use(express.json())

const serverSelectionTimeoutMS = 5000


app.get("/",(req,res)=>{
    res.send("hello world")
})

try {
    await mongoose.connect(process.env.MONGO,{
        serverSelectionTimeoutMS
    })
    console.log("DB is connected")
} catch (error) {
    // 디피 처음 연결할떄 에러 발생시
    console.log("Initial DB connection goes wrong")
}

// 디비연결된뒤 에러 발생시 에러 처리
mongoose.connection.on("error", error => {
    console.log(error)
})

app.use("/api/blogs",blogRoute)

app.get("/random.text",(req,res)=>{
    res.send("random.text")
})

app.get("/adb?cd", (req,res)=>{
    res.send("abc?cd")
})


app.listen(port,()=>{
    console.log("example app listening on port "+ port)
})