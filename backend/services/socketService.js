// backend/services/socketService.js
import { Server } from "socket.io";

export function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "http://localhost:5173" },
  });

  io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);

    socket.on("sendMessage", (message) => {
      io.emit("receiveMessage", message); // send to all
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
}
