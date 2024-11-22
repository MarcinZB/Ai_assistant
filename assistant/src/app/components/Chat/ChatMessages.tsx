import React from "react";
import styles from "./styles/ChatMesseges.module.css";

// This container represents messeges of the user and the bot

/* Components:
message
    message from the user
    message from the bot

FUNCTIONS:
    function to display the message
*/

const ChatMessages: React.FC = () => {
  return <div className={styles.botMessage}>Hello</div>;
};

export default ChatMessages;
