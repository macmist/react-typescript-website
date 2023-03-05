import React, { useState } from "react";

export default function NewMessageForm({ onSend }) {
  const [input, setInput] = useState<string>("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSend = () => {
    onSend(input);
    setInput("");
  };
  return (
    <>
      <input
        type="text"
        data-testid="messageText"
        value={input}
        onChange={handleInputChange}
      />
      <button data-testid="sendButton" onClick={handleSend}>
        Send
      </button>
    </>
  );
}
