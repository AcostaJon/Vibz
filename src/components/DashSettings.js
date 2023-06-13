import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function DashSettings() {
    return (
        <div className="settings">
            <h1>Settings</h1>
            <Link to={"/"}>
            <Button variant="danger">Logout</Button>
            </Link>
            
        </div>
    );
}

export default DashSettings;
