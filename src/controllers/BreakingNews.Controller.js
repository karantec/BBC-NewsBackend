const BreakingNews = require("../models/BreakingNews.Model");

const createBreakingNews = async (req, res) => {
  try {
    const data = await req.body;
    if (!data) {
      return res.status(404).json({ message: "data required" });
    }
    const breakingNewsInfo = await new BreakingNews(data);
    await breakingNewsInfo.save();
    return res.status(200).json({ message: "created" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const getBreakingNews = async (req, res) => {
  try {
    const data = await BreakingNews.find();
    return res.status(201).json({ data: data });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const updateBreakingNews = async (req, res) => {
  try {
    const { id } = await req.params;
    const data = await req.body;
    if (!data) {
      return res.status(404).json({ message: "data required" });
    }
    await BreakingNews.findByIdAndUpdate(id, data);
    return res.status(200).json({ message: "Update the breaking" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const deleteBreakingNews = async (req, res) => {
  try {
    const { id } = await req.params;
    const data = await req.body;
    if (!data) {
      return res.status(404).json({ message: "data required" });
    }
    await BreakingNews.findByIdAndDelete(id);
    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createBreakingNews,
  getBreakingNews,
  updateBreakingNews,
  deleteBreakingNews,
};
