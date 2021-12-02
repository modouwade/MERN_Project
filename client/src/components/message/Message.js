import React from "react";
import "./message.css";
// import { format } from "timeago.js";

export default function Message() {
  return (
    <div className="message">
      <div className="messageTop">
        <img src="/assets/person/2.jpeg" className="messageImg" alt="" />
        <p className="messageText">Hello it is a message</p>
      </div>
      <div className="messageBottom">1 hour</div>
    </div>
  );
}
