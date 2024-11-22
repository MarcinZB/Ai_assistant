import styles from "./styles/ChatHeader.module.css";
import aiAvatar from "../../assets/images/ai.png";
import Image from "next/image";

// This is a container which represents the header of the chat window.
/* Components
Image of the Ai bot
!!! MAYBE !!!Name of the Ai bot
!!!Secondary Priority!!! 
    Menu button
        in which we can add more options like settings, help, logout, add new assistant.
    Image of the user
    Select assistant dropdown
*/

interface ChatHeaderProps {
  children: React.ReactNode;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ children }) => {
  return (
    <div className={styles.header}>
      <Image
        src={aiAvatar}
        alt="AI Avatar"
        className={styles.avatarai}
        priority={true}
      />
      {children}
    </div>
  );
};

export default ChatHeader;
