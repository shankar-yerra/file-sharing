// this folder validates whether the files which are putting from frontend are perfect or not

import mongoose from "mongoose";
//validates through fileschema
const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required: true 
    },
    name:{
        type: String,
        required: true
    },
    downloadContent:{
        type: Number,
        required: true,
        default:0
    }

})
//building model
const File = mongoose.model('file', fileSchema);
// file is the name of collections

export default File;