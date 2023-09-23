import File from "../models/file.js";

export const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname
  };
  // to save the values in the database
  try {
    const file = await File.create(fileObj); // validates and saves in db
    
    response
      .status(200)
      .json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) { 
    console.error(error.message);
    response
      .status(500)
      .json({ error: error.message }); // sends the path
  }
};



export const downloadImage = async(request,response) => {
    try{
   const file = await File.findById(request.params.fileId);
// in url, query is the content which is after "question mark"
// params are contents after "/".
   file.downloadContent++;

   await file.save(); // save in db

   response.download(file.path, file.name);
    }catch(error){
        console.error(error.message);
        return response.status(500).json({ error: error.message});
    } // download the file,dont send the file
}