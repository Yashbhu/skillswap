// services/socketService.js
import { Server } from "socket.io";

export function initSocket(server) {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log(" User connected:", socket.id);

    // Listen for messages from clients
    socket.on("sendMessage", (message) => {
      io.emit("receiveMessage", message); // broadcast to all clients
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });
}
