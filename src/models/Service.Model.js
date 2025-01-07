const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  Description: { 
    type: String, 
    required: true 
  },

  ServicePicture: { 
    type: String, // Optional field, no `required` constraint
  },
  
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
