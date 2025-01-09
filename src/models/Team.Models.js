const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  designation: { 
    type: String, 
    required: true 
  },
  bio: { 
    type: String, // A short description or bio about the team member
  },
  profilePicture: { 
    type: [String], // URL or path to the team member's picture
   
  },
  
  skills: { 
    type: [String], // Array of skills, e.g., ["JavaScript", "React", "Node.js"]
    required: true 
  },
  technologies: { 
    type: [String], // Array of technologies the team member specializes in
    required: true 
  },
  joinedAt: { 
    type: Date, 
    default: Date.now 
  }
});

const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);

module.exports = TeamMember;
