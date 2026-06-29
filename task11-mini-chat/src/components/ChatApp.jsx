import { useState } from "react";

export default function ChatApp() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {

    if (message.trim() === "") {
      return;
    }

    setMessages([...messages, message]);

    setMessage("");

  };

  return (
    <div className="container">

      <h1>Mini Chat Application</h1>

      <div className="chat-box">

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleSendMessage}>
          Send Message
        </button>

      </div>

      <div className="messages">

        {messages.map((msg, index) => (

          <div
            key={index}
            className="message"
          >
            {msg}
          </div>

        ))}

      </div>

    </div>
  );
}