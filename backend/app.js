import express from "express";
import cors from "cors";

import skillroutes from "./routes/skillroutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/skills", skillroutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/chat", chatRoutes);

export default app;
