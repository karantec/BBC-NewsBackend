// src/models/modalData.js
const mongoose = require('mongoose');

const NewsDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { 
    type: String, 
    enum:['अंतरराष्ट्रीय',
      'राष्ट्रीय',
      'राज्य',
      'राजनीति',
      'शिक्षा',
      'रोजगार', 
      'पर्यटन',
      'खेल',
      'मौसम',
      'जायका',
      'स्वास्थ्य','व्यापार'],
    required: true 
  },
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false },
  thumbnailUrl: { type: String },
  newImage: [String],
});

NewsDataSchema.pre('save', async function (next) {
  next();
});

module.exports = mongoose.model("NewsData", NewsDataSchema);
