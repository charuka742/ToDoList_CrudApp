 import React from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTask from "./Pages/AddTask";
import ToDoList from "./Pages/ToDoList";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import SideBar from "./Pages/Sidebar";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<><SideBar/> <Profile/></>}/> 
        <Route path="/addTask" element={<AddTask/>}/>
        <Route path="/todolist" element={<><ToDoList/></>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
