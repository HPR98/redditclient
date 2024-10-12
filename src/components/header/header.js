import React from "react";
import "../../assets/styles/header.css"
import menu from "../../assets/images/menu.png"
import reddit_logo from "../../assets/images/reddit_logo.png"
import user from "../../assets/images/user.png"

function Header(){
    return(
        <div className="header">
            <img className="menuIcon" src={menu} alt="Open menu popup"></img>
            <div className="logoDiv">
                <img src={reddit_logo} alt="Reddit logo" className="redditLogo"></img>
                <h1 className="redditTitle">Reddit</h1>
            </div>
            <img src={user} className="userImage" alt="User Profilepicture"></img>
        </div>
    )
}

export default Header