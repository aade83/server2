import mongoose from "mongoose";
const comapnySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
       
    },
    website:{
        type: String,
        
    },
    location:{
        type: String,
        
    },
    logo:{
        type:String //URL to comapny logo
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})
export const Company= mongoose.model("Comapny", comapnySchema)
