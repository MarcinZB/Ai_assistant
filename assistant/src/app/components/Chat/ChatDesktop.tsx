import styles from "./styles/ChatDesktop.module.css";

// This container represents the desktop on which the messages are displayed

interface ChatDesktopProps {
  children: React.ReactNode;
}

const ChatDesktop: React.FC<ChatDesktopProps> = ({ children }) => {
  return <div className={styles.desktop}>{children}</div>;
};

export default ChatDesktop;
