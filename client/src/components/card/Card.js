import { useState } from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartfilled.svg";
import HeartFilled2 from "../../img/heartFilled2.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";

export const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleLikedState = () => {
    setLiked((current) => !current);
  };
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="user" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="post" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img
            src={HeartFilled2}
            alt="heart"
            className="cardIcon"
            onClick={handleLikedState}
          />
        ) : (
          <img
            src={Heart}
            alt="heart"
            className="cardIcon"
            onClick={handleLikedState}
          />
        )}
        <img src={Comment} alt="comment" className="cardIcon" />
        <img src={Share} alt="share" className="cardIcon" />
        <img src={Info} alt="info" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};
