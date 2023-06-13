import React from "react";
import LogoTitle from '../components/LogoTitle'
import LoginForm from '../components/Loginform'

function Home() {
    return (
        <div className="home-page page" >
            <LogoTitle />
            <LoginForm />
        </div>
    );
}

export default Home;
