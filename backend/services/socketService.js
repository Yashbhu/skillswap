// backend/services/socketService.js
import { Server } from "socket.io";

export function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
  });

  io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);

    // Listen for incoming messages
    socket.on("sendMessage", (message) => {
      console.log("Received:", message);
      io.emit("receiveMessage", message); // send to ALL clients
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
}
