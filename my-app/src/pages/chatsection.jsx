import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [entered, setEntered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  // Connect socket and fetch previous messages
  useEffect(() => {
    if (!entered) return;

    // 1️⃣ Fetch existing messages from backend
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));

    // 2️⃣ Connect Socket.IO
    socketRef.current = io("http://localhost:5000");
    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [entered]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const message = { sender: username, text: input };

    // 1️⃣ Show immediately in UI
    setMessages((prev) => [...prev, message]);

    // 2️⃣ Send to backend for persistence
    fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    }).catch((err) => console.error(err));

    // 3️⃣ Broadcast to other clients via socket
    socketRef.current.emit("sendMessage", message);

    setInput("");
  };

  if (!entered) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="mb-4 text-xl font-semibold">Enter your name</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Yash or Yash Part 2"
          className="border p-2 rounded mb-4"
        />
        <button
          onClick={() => username.trim() && setEntered(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Join Chat
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md h-[500px] border border-gray-300 rounded-lg flex flex-col mx-auto shadow-lg overflow-hidden">
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.sender === username ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] break-words ${
                msg.sender === username
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span className="font-semibold">{msg.sender}: </span>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex border-t border-gray-300 p-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-2 px-4 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
