// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initSocket } from "./services/socketService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => res.json({ msg: "pong" }));

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Attach socket after server is created
initSocket(server);
