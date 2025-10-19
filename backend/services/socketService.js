// backend/services/socketService.js
import { Server } from "socket.io";

export function initSocket(server) {
  const allowedOrigins = process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',')
    : ['http://localhost:5173', 'http://localhost:3000'];

  const io = new Server(server, {
    cors: { 
      origin: function (origin, callback) {
       
        if (!origin) return callback(null, true);
        
        
        if (allowedOrigins.includes(origin) || origin.includes('vercel.app')) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
      methods: ["GET", "POST"]
    },
  });

  io.on("connection", (socket) => {
    console.log(" User connected:", socket.id);

    socket.on("sendMessage", (message) => {
      // Broadcast to all OTHER users (not back to sender)
      socket.broadcast.emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
}
