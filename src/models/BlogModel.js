const mongoose = require('mongoose');

const BlogDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category:{type:String,
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
      required:true
  },
  author: { type: String, default: 'Anonymous' },
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
  thumbnailUrl: { type: String }, 
  BlogImages: [{ type: String }], 
});


const BlogData = mongoose.model('BlogData', BlogDataSchema);

module.exports = BlogData;
