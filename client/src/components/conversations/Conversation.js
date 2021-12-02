import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation() {
  //   const [user, setUser] = useState(null);

  //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //   useEffect(() => {
  //     const friendId = conversation.members.find((m) => m !== currentUser._id);

  //     const getUser = async () => {
  //       try {
  //         const res = await axios("/users?userId=" + friendId);
  //         setUser(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getUser();
  //   }, [conversation, currentUser]);
  return (
    <div className="conversation">
      <img
        src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg"
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">wade</span>
    </div>
  );
}
