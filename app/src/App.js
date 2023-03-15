import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/user/UserList";
import UserDetail from "./pages/userDetail/UserDetail";
import NewUser from "./pages/newuser/NewUser";
import Calendar from "./pages/calendar/Calendar";
import NotesApp from "./pages/note/NotesApp";

function App() {
  return (
 <div>
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/users" element={<UserList />} /> 
        <Route path="/user/:userid" element={<UserDetail />} /> 
        <Route path="/newUser" element={<NewUser/>} /> 
        <Route path="/calendar" element={<Calendar />} /> 
        <Route path="/notes" element={<NotesApp />} /> 

        </Routes>
      </div>
    </BrowserRouter>
 </div>
  );
}

export default App;