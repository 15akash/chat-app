import React from "react";
import "./HomePage.css";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat";

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default HomePage;
