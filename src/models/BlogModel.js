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
      'स्वास्थ्य','व्यापार' ,'भारत लिंकेज राष्ट्रीय और विदेश की जगह अंतर्राष्ट्रीय कर दीजिए'],
      required:true
  },
  author: { type: String, default: 'Anonymous' },
  tags: [String],
  publishedDate: { type: Date, default: Date.now },
  thumbnailUrl: { type: String }, // For the main thumbnail
  BlogImages: [{ type: String }], // Array to store image paths/URLs
});


const BlogData = mongoose.model('BlogData', BlogDataSchema);

module.exports = BlogData;
