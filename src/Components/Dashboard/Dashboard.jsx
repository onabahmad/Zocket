import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import MainDash from "../MainDash/MainDash";

const Dashboard = () => {
  return (
    <div className="Dashboard_container">
      <div className="Sidebar_container">
        <Sidebar />
      </div>
      <div className="MainDash_container">
        <MainDash />
      </div>
    </div>
  );
};

export default Dashboard;
