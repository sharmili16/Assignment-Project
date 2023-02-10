import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Feed from './feed';
//import Sign from './sign';
//import Log from './log';
//import Forgot from './forgot';
import Post from './post';
import Search from './search';
import Name from './components/name/name';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import ForgotPassword from './components/forgot_pass/forgot_pass';
import { BrowserRouter, Routes, Route }from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot_pwd" element={<ForgotPassword/>}/>
      <Route path="feed" element={<Feed />} />
      <Route path="name" element={<Name />} />
      <Route path="post" element={<Post/>} />
      <Route path="search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
}

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