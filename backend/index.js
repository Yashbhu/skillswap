// backend/index.js
import express from "express";
import cors from "cors";
import { initSocket } from "./services/socketService.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Optional REST API just for testing
app.get("/api/ping", (req, res) => {
  res.json({ msg: "pong" });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Initialize Socket.IO
initSocket(server);
