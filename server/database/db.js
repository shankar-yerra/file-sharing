import mongoose from "mongoose"; // it will help to connect with mongodb

const DBConnection = async () => {
  const MONODB_URI = `mongodb+srv://<username>:<password>@file-shar-pro.rgizocn.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting with the database", error.message);
  }
};

export default DBConnection;
