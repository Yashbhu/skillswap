import express from "express";
import
import {
  getPopularSkills,
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from "./controllers/skillController.js";

const router = express.Router();
router.get()
// Public endpoints
router.get("/", getSkills);
router.get("/popular", getPopularSkills);

// Admin endpoints
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;
