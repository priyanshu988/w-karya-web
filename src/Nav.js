import React from 'react'
import './Nav.css';

function Nav() {
    
        return (
            <div className="nav">
                <div className="nav_content">
                    <img className="nav_logo" src="https://i.ibb.co/dmZFYQ9/logo.png" alt="" />
                    <div className="nav_menu">
                        <li>Dashboard</li>
                        <li>Open Positions</li>
                        <li>Inbox</li>
                        <li>Notifications</li>
                        <li className="profile">Profile</li>
                    </div>
                </div>
            </div>
        )
    
}

export default Nav;

