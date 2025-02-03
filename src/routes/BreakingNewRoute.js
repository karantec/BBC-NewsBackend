const express = require("express");
const breakingNewsRouter = express.Router();
const {
  createBreakingNews,
  getBreakingNews,
  updateBreakingNews,
  deleteBreakingNews,
} = require("../controllers/BreakingNews.Controller");

breakingNewsRouter.post("/createbreakingnews", createBreakingNews);
breakingNewsRouter.get("/getbreakingnews", getBreakingNews);
breakingNewsRouter.put("/updatedbreakingnews/:id", updateBreakingNews);
breakingNewsRouter.delete("/deletebreakingnews/:id", deleteBreakingNews);



module.exports = breakingNewsRouter;