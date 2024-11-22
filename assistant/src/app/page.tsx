import React from "react";
import ChatCanvas from "./components/Chat/ChatCanvas";
import ChatHeader from "./components/Chat/ChatHeader";
import ChatDesktop from "./components/Chat/ChatDesktop";
import ChatInput from "./components/Chat/ChatInput";
import ChatMessages from "./components/Chat/ChatMessages";

function App() {
  return (
    <React.StrictMode>
      <ChatCanvas>
        <ChatHeader></ChatHeader>
        <ChatDesktop>
          <ChatMessages />
        </ChatDesktop>

        <ChatInput />
      </ChatCanvas>
    </React.StrictMode>
  );
}

export default App;
