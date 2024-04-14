import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/home.js";
import Calendar from "./components/calendar.js";
import Chat from "./components/chat.js";
import HeaderTop from "./HeaderTop.js";
import Signup from "./components/signup.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<HeaderTop />}></Route>
      <Route index element={<App />} />
    <Route path="/calendar" element={<Calendar/>}></Route>
    <Route path="/chat" element={<Chat/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

