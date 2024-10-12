import React from "react";
import "../../assets/styles/contentCard.css"
import placeholder from "../../assets/images/placeholder.png"
import arrow from "../../assets/images/arrow.png"
import comments from "../../assets/images/comments.png"

function contentCard(){
    return(
        <div className="ContentCard">
            <h1 className="ContentTitle">Content Title</h1>
            <div className="ContentImageDiv">
                <img src={placeholder} className="ContentImage" alt="Content placeholder"></img>
            </div>
            <div className="UserInteraction">
                <div className="likeSection">
                    <img src={arrow} className="likeButton" alt="Like button"></img>
                    <h2 className="likeText">666</h2>
                </div>
                <div className="dislikeSection">
                    <img src={arrow} className="dislikeButton" alt="Dislike button"></img>
                    <h2 className="dislikeText">666</h2>
                </div>
                <div className="CommentsDiv">
                    <img src={comments} className="CommentsImage" alt="Comments icon"></img>
                    <h2>666</h2>
                </div>
            </div>
        </div>
       
    )
}

export default contentCard