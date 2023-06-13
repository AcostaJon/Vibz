import React from "react";
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import { Outlet } from "react-router-dom";

function UserDashboard() {
    return (
        <div className="userdash-page page" >
                <Header />
                <Outlet> 
                </Outlet>
                <Navigation />
        </div>
    );
}

export default UserDashboard;
