// frontend/Chat.jsx
import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [entered, setEntered] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  // Connect to socket only once
  useEffect(() => {
    if (entered && !socketRef.current) {
      socketRef.current = io("http://localhost:5000");

      socketRef.current.on("receiveMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      return () => socketRef.current.disconnect();
    }
  }, [entered]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = { sender: username, text: input };
    setMessages((prev) => [...prev, message]); // show immediately
    socketRef.current.emit("sendMessage", message); // send to all users
    setInput("");
  };

  // Username input form
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

      <div className="flex border-t border-gray-300 p-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
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
