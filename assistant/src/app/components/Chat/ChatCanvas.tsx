import styles from "./styles/ChatCanvas.module.css";

// This is a container for all of the components that will be displayed in the chat window.

interface ChatCanvasProps {
  children: React.ReactNode; // this is a type which allow us to pass any type of children to the component
}

// React.FC is a generic type that allows us to define the type of props that the component will receive.
const ChatCanvas: React.FC<ChatCanvasProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default ChatCanvas;
