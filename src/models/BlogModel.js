const mongoose = require('mongoose');

const BlogDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category:{type:String},
  author: { type: String, default: 'Anonymous' },
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
  thumbnailUrl: { type: String }, // For the main thumbnail
  BlogImages: [{ type: String }], // Array to store image paths/URLs
});


const BlogData = mongoose.model('BlogData', BlogDataSchema);

module.exports = BlogData;
