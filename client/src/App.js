import {useRef, useState, useEffect} from 'react';
// document.getelementbyid will access actual dom but we access only virtual dom. so useRef is used in react 
//useState is a hook of react in which we can store anything
import "./App.css"; 

import {uploadFile} from './services/api';

function App() {

  const [file, setFile] = useState(''); // we cannot change file variable directly.so setfile is used to update file variable
  const [result, setResult] = useState('');
  const fileInputRef = useRef();// declare useRef
   // document.file like codes will access physical DOM, but react has virtual DOM. so useRef() replaces all document.addfile etc,.
  const logo =
    "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

    useEffect(() => {//api call
      const getImage = async ()=>{
        if(file){
          const data = new FormData();
          data.append("name",file.name);
          data.append("file",file);

          let response = await uploadFile(data); // API function
          setResult(response.path);
        }
      }
      getImage();
    },[file])

    const onUploadClick = () => {
      fileInputRef.current.click();
    } // choose file access comes when you click upload button

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1> Simple File Sharing!</h1>
        <p>Upload and share the download link</p>

        <button onClick={()=> onUploadClick()}>Upload</button>
        <input type="file" 
        ref = {fileInputRef} // applies choose file functionality on upload button
        style = {{display:'none'}} // hides choose file button
        onChange = {(e)=> setFile(e.target.files[0])} // display link of choosed file
        />

        <a href={result} target = "_blank">{result}</a> 
      </div> 
    </div>
    //to show on screen
  );
}

export default App; // all the code under this file(app.js) will export to index.js in client
