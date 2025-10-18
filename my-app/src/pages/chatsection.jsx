// frontend/Chatsection.jsx
import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

// Get backend URL from environment variables
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

const Chatsection = () => {
  const [role, setRole] = useState("Student"); // Default role
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  // Connect to socket immediately on mount
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(SOCKET_URL, {
        transports: ['websocket', 'polling'], // Support both for better compatibility
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      socketRef.current.on("connect", () => {
        setConnectionStatus("Connected");
        console.log("✅ Connected to server");
      });

      socketRef.current.on("receiveMessage", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      socketRef.current.on("disconnect", () => {
        setConnectionStatus("Disconnected");
        console.log("❌ Disconnected from server");
      });

      socketRef.current.on("connect_error", (error) => {
        console.error("Connection error:", error);
        setConnectionStatus("Connection Error");
      });

      return () => socketRef.current.disconnect();
    }
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = { sender: role, text: input, timestamp: Date.now() };
    setMessages((prev) => [...prev, message]); // show immediately
    socketRef.current?.emit("sendMessage", message); // send to other users
    setInput("");
  };

  const toggleRole = () => {
    setRole((prev) => (prev === "Student" ? "Mentor" : "Student"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">SkillSwap Chat</h1>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                <span className={`w-2 h-2 rounded-full ${
                  connectionStatus === "Connected" ? "bg-green-500" : "bg-red-500"
                }`}></span>
                {connectionStatus}
              </p>
            </div>
            <button
              onClick={toggleRole}
              className={`px-4 py-2 rounded-lg font-medium text-white transition-all hover:scale-105 ${
                role === "Mentor" 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {role}
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="bg-white h-[500px] overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <p className="text-gray-400 text-lg">No messages yet</p>
                <p className="text-gray-300 text-sm mt-2">Open this page in another tab to start chatting!</p>
              </div>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === role ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  msg.sender === role
                    ? role === "Mentor"
                      ? "bg-blue-600 text-white"
                      : "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-xs font-medium opacity-75 mb-1">{msg.sender}</p>
                <p className="text-sm break-words">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-b-2xl shadow-sm border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={connectionStatus !== "Connected"}
            />
            <button
              className={`px-6 py-2.5 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                role === "Mentor"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={sendMessage}
              disabled={connectionStatus !== "Connected" || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatsection;
