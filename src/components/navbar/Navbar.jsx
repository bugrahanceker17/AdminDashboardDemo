import React from 'react'
import "./navbar.css"
import { NotificationsNone, Settings } from '@material-ui/icons'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone></NotificationsNone>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings></Settings>
                    </div>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_569204.png" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}
