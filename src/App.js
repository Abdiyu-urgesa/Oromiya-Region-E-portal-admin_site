import React from "react";
import "./App.css";
import MySidebar from "./componenets/Sidebar/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./componenets/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AppUsers from "./pages/users/Users";
function App() {
  return (
    <div className="app">
      <ProSidebarProvider>
        <MySidebar />
      </ProSidebarProvider>
      <div className="content">
        <Topbar></Topbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<AppUsers></AppUsers>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
