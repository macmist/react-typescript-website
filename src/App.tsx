import React, { useState } from "react";
import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";
function App() {
  const handleSend = (message: string) => {
    setMessages([message, ...messages]);
  };
  const [messages, setMessages] = useState<string[]>([]);
  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </>
  );
}

export default App;
