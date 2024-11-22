import styles from "./styles/ChatInput.module.css";

// This container represents the area where the user can type a message
/* Components:
input field
    function to handle the input (setMessage)
send button
    function to handle the send (senfMessage)
*/

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (reaction: React.MouseEvent<HTMLButtonElement>) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  message,
  setMessage,
  sendMessage,
}) => {
  return (
    <div className={styles.box}>
      <input type="text" className={styles.inputField}></input>
      <button className={styles.sendButton}>Send</button>
    </div>
  );
};

export default ChatInput;
