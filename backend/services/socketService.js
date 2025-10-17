import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }, // allow React client to connect
});

io.on("connection", (socket) => {
  console.log(" User connected:", socket.id);

  // Receive message from a client
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message); // broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log(" User disconnected:", socket.id);
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
