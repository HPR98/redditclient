import React from "react";
import userProfile from "../../assets/images/userProfile.png"
import community from "../../assets/images/community.png"
import settings from "../../assets/images/settings.png"
import logout from "../../assets/images/logout.png"
import "../../assets/styles/menuRight.css"

function MenuRight({isOpen}){
    return(
        <div className="menuRight">
            {isOpen && (
                <ul>
                    <li className="listItem">
                        <img src={userProfile} className="listImage" alt="Profile Icon"></img>
                        <h3 className="listText">Profile</h3>
                    </li>
                    <li className="listItem">
                        <img src={community} className="listImage" alt="Create community icon"></img>
                        <h3 className="listText">Create Community</h3>
                    </li>
                    <li className="listItem">
                        <img src={settings} className="listImage" alt="Settings icon"></img>
                        <h3 className="listText">Settings</h3>
                    </li>
                    <li className="listItem">
                        <img src={logout} className="listImage" alt="Logout icon"></img>
                        <h3 className="listText">Logout</h3>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default MenuRight