const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  designation: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
  profilePicture: { 
    type: [String], // Optional field, no `required` constraint
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, // Assuming a 5-star rating system
    required: true 
  },
  portfolioLink: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = Testimonial;
