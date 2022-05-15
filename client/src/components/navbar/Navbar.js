import "./navbar.css";
import Notification from "../../img/notification.svg";
import Settings from "../../img/settings.svg";
import Message from "../../img/message.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Talk</span>
      <div className="icons">
        <div className="icon">
          <img src={Notification} className="iconImage" alt="icon" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Message} className="iconImage" alt="icon" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Settings} className="iconImage" alt="icon" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};
