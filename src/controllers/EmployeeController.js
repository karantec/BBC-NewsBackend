const Employee = require("../models/EmployeeModel");

// Create a new employee
const createEmployee = async (req, res) => {
    try {
        const employeeData = req.body;

        // Create a new Employee instance
        const employee = new Employee(employeeData);
        await employee.save();

        res.status(201).json({
            success: true,
            message: "Employee created successfully",
            data: employee
        });
    } catch (error) {
        console.error("Create Employee Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create employee",
            details: error.message
        });
    }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json({
            success: true,
            data: employees
        });
    } catch (error) {
        console.error("Get All Employees Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve employees",
            details: error.message
        });
    }
};

// Get an employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findById(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (error) {
        console.error("Get Employee By ID Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve employee",
            details: error.message
        });
    }
};

// Update an employee by ID
const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { ...req.body, updatedAt: new Date() },
            { new: true } // Return the updated document
        );

        if (!updatedEmployee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            data: updatedEmployee
        });
    } catch (error) {
        console.error("Update Employee Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update employee",
            details: error.message
        });
    }
};

// Delete an employee by ID
const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEmployee = await Employee.findByIdAndDelete(id);

        if (!deletedEmployee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully"
        });
    } catch (error) {
        console.error("Delete Employee Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete employee",
            details: error.message
        });
    }
};

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};
