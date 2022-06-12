import React from "react";
import "./maillist.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save Money</h1>
      <span className="mailDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, amet
        nisi. Incidunt.
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
