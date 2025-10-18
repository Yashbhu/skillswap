import { Server } from "socket.io";

export function initSocket(server) {
  const io = new Server(server, { cors: { origin: "*" } });

  
  io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-connected", userId);
      socket.on("disconnect", () => socket.to(roomId).emit("user-disconnected", userId));
    });

    socket.on("signal", (data) => {
      io.to(data.to).emit("signal", { from: data.from, signal: data.signal });
    });
  });
}
