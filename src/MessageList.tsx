import React from "react";

export default function MessageList({ messages }) {
  return (
    <ul>
      {messages && messages.map((message) => <li key={message}>{message}</li>)}
    </ul>
  );
}
