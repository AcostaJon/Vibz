import React from "react";
import DashHome from "./DashHome"
import DashExplore from "./DashExplore";
import DashLibrary from "./DashLibrary";
import DashPremium from "./DashPremium"
import DashSettings from "./DashSettings"
const DashboardContent = (props) => {


    if (props.content === "home") {
        
        return (
            <div className="dashboard-content">
                <DashHome />
            </div>
        )
    }
    else if (props.content === "explore") {
        return (
            <div className="dashboard-content">
                <DashExplore />
            </div>
        )
    } else if (props.content === "library") {

        return (
            <div className="dashboard-content">
                <DashLibrary />
            </div>
        )

    } else if (props.content === "premium") {
        return (
            <div className="dashboard-content">
                <DashPremium />
            </div>
        )

    } else if (props.content === "settings") {
        return (
            <div className="dashboard-content">
                <DashSettings />
            </div>
        )
    }

}

export default DashboardContent;