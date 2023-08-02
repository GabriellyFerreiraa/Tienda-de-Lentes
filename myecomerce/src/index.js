import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABBHERNhAhH-sasaeesCS0kXm848vJ7Vc",
  authDomain: "tiendalentes-a901b.firebaseapp.com",
  projectId: "tiendalentes-a901b",
  storageBucket: "tiendalentes-a901b.appspot.com",
  messagingSenderId: "935025346885",
  appId: "1:935025346885:web:0cce3e064eec479487d62c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
