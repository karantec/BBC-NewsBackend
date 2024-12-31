const mongoose = require('mongoose');

const InteriorDataSchema = new mongoose.Schema({
  title: { type: String },
  productName: { type: String },
  Category: { 
    type: String, 
    enum: [
      'Web Dev', 
      'App Dev', 
      'Software Dev', 
      'Editing', 
      '2D & 3D Modeling', 
      'Animation'
    ], 
    required: true 
  },
  Description: { type: String },
  ProductDeployedLink: { type: String },
  ProductVideo: [String],
  productImage: [String],
});

const InteriorData = mongoose.model('InteriorData', InteriorDataSchema);

module.exports = InteriorData;
