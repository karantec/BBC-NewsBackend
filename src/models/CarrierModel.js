const mongoose = require('mongoose');

const CarrierSchema = new mongoose.Schema({
  jobTitle: { 
    type: String, 
    required: true 
  },
  jobDescription: { 
    type: String, 
    required: true 
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract'],
    required: true
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  applicationDeadline: {
    type: Date,
    required: true
  },
  responsibilities: {
    type: [String],
    required: true
  },
  requirements: {
    type: [String],
    required: true
  },
  toolsAndTechnologies: {
    type: [String],
    required: true
  }
});

const Carrier = mongoose.model('Carrier', CarrierSchema);

module.exports = Carrier;
