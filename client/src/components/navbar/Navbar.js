import "./navbar.css";
import Notification from "../../img/notification.svg";
import Settings from "../../img/settings.svg";
import Message from "../../img/message.svg";
import { useEffect, useState } from "react";

export const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  console.log(notifications);

  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) action = "liked";
    else if (type === 2) action = "commented on";
    else action = "shared";

    return (
      <span className="notification" key={senderName}>
        {`${senderName} ${action} your post`}
      </span>
    );
  };
  return (
    <div className="navbar">
      <span className="logo">Talk</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} className="iconImage" alt="icon" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Message} className="iconImage" alt="icon" />
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Settings} className="iconImage" alt="icon" />
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};
