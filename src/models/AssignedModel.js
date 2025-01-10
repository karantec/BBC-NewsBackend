const mongoose = require('mongoose');

const AssignedSchema = new mongoose.Schema({
  ProjectName: { 
    type: String, 
    required: true 
  },
 ClientName: { 
    type: String, 
    required: true 
  },
  
  AssignedEmployees: {
    type: String,
    required: true
  },
 StartDate: {
    type: Date,
    required: true
  },
  DeadLine: {
    type: Date,
    required: true
  },
  BudgetOfProject: {
    type: String,
    required: true
  },
  NetRevenue: {
    type: String,
    required: true
  },
  
});

const Assigned = mongoose.model('Assigned', AssignedSchema);

module.exports = Assigned;
