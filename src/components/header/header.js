import React from "react";
import "../../assets/styles/header.css"
import menu from "../../assets/images/menu.png"
import reddit_logo from "../../assets/images/reddit_logo.png"
import user from "../../assets/images/user.png"
import closeX from "../../assets/images/closeX.png"

function Header({ toggleLeftMenu, leftIsOpen, toggleRightMenu, rightIsOpen }){
    return(
        <div className="header">
            {leftIsOpen ? <img className="menuIcon" src={closeX} alt="Open menu popup" onClick={toggleLeftMenu}></img> : <img className="menuIcon" src={menu} alt="Open menu popup" onClick={toggleLeftMenu}></img>}
            <div className="logoDiv">
                <img src={reddit_logo} alt="Reddit logo" className="redditLogo"></img>
                <h1 className="redditTitle">Reddit</h1>
            </div>
            {rightIsOpen ? <img src={closeX} className="userImage" alt="User Profilepicture" onClick={toggleRightMenu}></img> : <img src={user} className="userImage" alt="User Profilepicture" onClick={toggleRightMenu}></img>}
        </div>
    )
}

export default Header