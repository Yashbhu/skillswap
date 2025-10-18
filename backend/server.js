import app from "./app.js";
import dotenv from "dotenv";
import http from "http";
import { setupSocket } from "./services/socketService.js";  
import { initSocket } from "./services/videoCallService.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
