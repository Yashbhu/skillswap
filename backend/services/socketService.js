import { Server } from "socket.io";

export const initSocket = (server) => {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    // Join a room for 1:1 chat or group chat
    socket.on("join-room", (roomId, userId) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-connected", userId);

      socket.on("disconnect", () => {
        socket.to(roomId).emit("user-disconnected", userId);
      });
    });

    // Send message
    socket.on("send-message", ({ roomId, message, userId }) => {
      io.to(roomId).emit("receive-message", { message, userId });
    });

    // WebRTC signaling
    socket.on("signal", (data) => {
      io.to(data.to).emit("signal", { from: data.from, signal: data.signal });
    });
  });
};
