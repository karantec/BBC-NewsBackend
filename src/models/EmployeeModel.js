const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  EmployeeName: { 
    type: String, 
    required: true 
  },
  Designation: { 
    type: String, 
    required: true 
  },
  Address: {
    type: String,
    required: true
  },
  Skills:{
    type: String,
    required: true
  },
  Salary: {
    type: Number,
    required: true
  },
  BankDetails: {
    AccountNumber: {
      type: String,
      required: true
    },
    BankName: {
      type: String,
      required: true
    },
    IFSC: {
      type: String,
      required: true
    },
    Branch: {
      type: String,
      required: true
    }
  },
  MonthlyPerformance: {
    type: Number,
    required: true,
    min: 0,
    max: 10 // Performance is rated under 10
  },
  JoiningDate: {
    type: Date,
    required: true
  }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
