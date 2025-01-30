const express = require("express");
const podcastRoute = express.Router();
const {
  createPoadcast,
  updatePodcast,
  deletePodcast,
  getPodcast,
  getPodcasts,
} = require("../controllers/podcast.Controller");


podcastRoute.post("/createpodcast",createPoadcast);
podcastRoute.get("/getallpodcast",getPodcasts);
podcastRoute.get("/podcast/:id",getPodcast);
podcastRoute.patch("/updatepodcast/:id",updatePodcast);
podcastRoute.delete("/deletepodcast/:id",deletePodcast);


module.exports = podcastRoute 