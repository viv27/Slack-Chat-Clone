import React from 'react';
import './Welcome.css';
import Logo from '../Slack_RGB.png';

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__container">
                <img src={Logo} alt=""/>
                <h1>Welcome to Vs Slack App</h1>
                <p>vs-slack-app.web.app</p>
            </div>

        </div>
    )
}

export default Welcome
