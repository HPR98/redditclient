import React from "react";
import "../../assets/styles/menuLeft.css"
import categoryPlaceholder from "../../assets/images/categoryPlaceholder.png"

function MenuLeft({ isOpen }){
    return(
        <div className="menu">
            {isOpen && (
                <ul>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">Popular</h3>

                    </li>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">Hot and Trending</h3>
                    </li>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">Movies</h3>
                    </li>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">NoStupidQuestions</h3>
                    </li>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">Oddly satisfying</h3>
                    </li>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">Music</h3>
                    </li>
                    <li className="categoryItem">
                        <img src={categoryPlaceholder} className="categoryItemImage" alt="Placeholder"></img>
                        <h3 className="categoryItemText">Games</h3>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default MenuLeft