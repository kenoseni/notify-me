import { useState } from "react";
import "./card.css";
import Heart from "../../img/heart.svg";
import HeartFilled2 from "../../img/heartFilled2.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";

export const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked((current) => !current);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
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
          <img src={HeartFilled2} alt="heart" className="cardIcon" />
        ) : (
          <img
            src={Heart}
            alt="heart"
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <img
          src={Comment}
          alt="comment"
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <img
          src={Share}
          alt="share"
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <img
          src={Info}
          alt="info"
          className="cardIcon infoIcon"
          onClick={() => handleNotification(4)}
        />
      </div>
    </div>
  );
};
