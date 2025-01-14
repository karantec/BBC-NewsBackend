// src/models/modalData.js
const mongoose = require('mongoose');

const NewsDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['भारत', 'विदेश', 'मनोरंजन', 'खेल', 'विज्ञान-टेक्नॉलॉजी', 'सोशल', 'वीडियो', 'पॉडकास्ट'], 
    required: true 
  },
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
  isFeatured: { type: Boolean, default: false },
  thumbnailUrl: { type: String },
  newImage: [String],
});

NewsDataSchema.pre('save', async function (next) {
  // Pre-save hook logic can be added here
  next();
});

module.exports = mongoose.model("NewsData", NewsDataSchema);
