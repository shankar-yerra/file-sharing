import React from 'react';
import ReactDOM from 'react-dom/client';//helps to run react in browser
import './index.css';
import App from './App'; // import code from app.js in client
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //fetching the element which has id = root
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode> // app component under root element will get rendered
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
