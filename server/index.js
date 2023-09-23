import express from "express"; // module type import
import router from "./routes/routes.js";
import cors from "cors"; 
import DBConnection from "./database/db.js";

const app = express();//initialize express

app.use(cors()); // react server in frontend and express server in backend doesnot share data...so cors are installed to share data among them
// cors should install before routing
app.use("/", router);
const PORT = 8000;//run express server at port 8000 

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)); // to start the server
