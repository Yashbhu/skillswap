// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initSocket } from "./services/socketService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Production-ready CORS configuration
const allowedOrigins = process.env.CORS_ORIGINS 
  ? process.env.CORS_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list or is a Vercel deployment
    if (allowedOrigins.includes(origin) || origin.includes('vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => res.json({ msg: "SkillSwap API Running" }));
app.get("/api/ping", (req, res) => res.json({ msg: "pong" }));
app.get("/api/health", (req, res) => res.json({ status: "healthy", timestamp: new Date().toISOString() }));

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Attach socket after server is created
initSocket(server);
