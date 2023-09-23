import axios from 'axios';
// api call
const API_URL = 'http://localhost:8000'; // backend url
export const uploadFile = async (data) =>{
    try{
    let response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
    }catch(error){
        console.error('Error while calling the api',error.message);
    } 
}

//this api.js makes api call and sends request for uploading file and returns the response from backend 