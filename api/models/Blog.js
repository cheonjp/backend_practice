import mongoose from "mongoose"
import { Schema } from "mongoose"

const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

export default mongoose.model("Blog",blogSchema)