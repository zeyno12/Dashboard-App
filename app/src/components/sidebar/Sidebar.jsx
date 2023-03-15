import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Dashboard</h3>
          <ul className="sidebar_List">
            <Link to="/" className="link">
              <li className="sidebar_list_item active">
                <i class="bi bi-house sidebarIcon"></i>
                Home
              </li>
            </Link>
            <li className="sidebar_list_item">
              <i class="bi bi-graph-down"></i>Analytics
            </li>
            <li className="sidebar_list_item">
              <i class="bi bi-activity"></i>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Quick Menu</h3>
          <ul className="sidebar_List">
            <Link to="/users" className="link">
              <li className="sidebar_list_item">
                <i class="bi bi-person-circle sidebarIcon"></i>
                Users
              </li>
            </Link>
            <Link to="/calendar" className="link">
              <li className="sidebar_list_item">
                <i class="bi bi-calendar-date"></i>
                Calendar
              </li>
            </Link>
           
           <Link to='/notes'className="link" >
           <li className="sidebar_list_item">
              <i class="bi bi-journal-text"></i>
              Notes
            </li>
           </Link>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
