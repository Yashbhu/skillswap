import express from "express";
import { getPopularSkills } from "../controllers/skillController.js";

const router = express.Router();

router.get("/popular", getPopularSkills);

export default router;
