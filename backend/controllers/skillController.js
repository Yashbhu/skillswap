import prisma from "../models/prismaClient.js";
import redis from "../utils/redisClient.js";

// Get popular skills (cached)
export const getPopularSkills = async (req, res) => {
  try {
    const cache = await redis.get("popular_skills");
    if (cache) return res.json(JSON.parse(cache));

    const skills = await prisma.skill.findMany({
      orderBy: { popularity: "desc" },
      take: 10
    });

    await redis.set("popular_skills", JSON.stringify(skills), "EX", 3600);
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Admin: Create a new skill
export const createSkill = async (req, res) => {
  try {
    const { name, category, price } = req.body;
    const skill = await prisma.skill.create({ data: { name, category, price } });
    res.json(skill);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Admin: Update a skill
export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, price } = req.body;
    const skill = await prisma.skill.update({
      where: { id: parseInt(id) },
      data: { name, category, price }
    });
    res.json(skill);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Admin: Delete a skill
export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.skill.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Skill deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// User: Get all skills (with optional category filter)
export const getSkills = async (req, res) => {
  try {
    const { category } = req.query;
    const skills = await prisma.skill.findMany(
      category ? { where: { category } } : {}
    );
    res.json(skills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
