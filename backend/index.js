require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
import socketService from './services/socketService.js';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());


app.post("/api/users", async (req, res) => {
  const { username, email, status } = req.body;
  try {
    const user = await prisma.user.create({
      data: { username, email, status }
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});


app.get("/api/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { id: 'desc' }
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});


app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { status }
    });
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
