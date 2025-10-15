import prisma from "../models/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {

  const { name, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  
  const user = await prisma.user.create({ data: { name, email, password: hashed, role } });
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token, user });

};
