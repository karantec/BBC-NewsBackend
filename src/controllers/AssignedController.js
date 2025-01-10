const Assigned = require("../models/AssignedModel");

// Create a new project assignment
const createAssigned = async (req, res) => {
    try {
        const data = req.body;

        // Create a new Assigned instance
        const assigned = new Assigned(data);
        await assigned.save();

        console.log(assigned);

        res.status(201).json({ success: true, message: "Project assignment created successfully", data: assigned });
    } catch (error) {
        console.error("Create Error:", error);
        res.status(500).json({ success: false, message: "Failed to create project assignment", details: error.message });
    }
};

// Get all project assignments
const getAllAssigned = async (req, res) => {
    try {
        const assignments = await Assigned.find();

        res.status(200).json({
            success: true,
            data: assignments,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve project assignments",
            details: error.message,
        });
    }
};

// Get a project assignment by ID
const getAssignedById = async (req, res) => {
    try {
        const { id } = req.params;

        const assignment = await Assigned.findById(id);

        if (!assignment) {
            return res.status(404).json({
                success: false,
                message: "Project assignment not found",
            });
        }

        res.status(200).json({
            success: true,
            data: assignment,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve project assignment",
            details: error.message,
        });
    }
};

// Update a project assignment by ID
const updateAssigned = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedAssignment = await Assigned.findByIdAndUpdate(
            id,
            { ...req.body, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedAssignment) {
            return res.status(404).json({ success: false, message: "Project assignment not found" });
        }

        res.status(200).json({
            success: true,
            message: "Project assignment updated successfully",
            data: updatedAssignment,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: "Failed to update project assignment", details: error.message });
    }
};

// Delete a project assignment by ID
const deleteAssigned = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAssignment = await Assigned.findByIdAndDelete(id);

        if (!deletedAssignment) {
            return res.status(404).json({ success: false, message: "Project assignment not found" });
        }

        res.status(200).json({
            success: true,
            message: "Project assignment deleted successfully",
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: "Failed to delete project assignment", details: error.message });
    }
};

module.exports = {
    createAssigned,
    getAllAssigned,
    getAssignedById,
    updateAssigned,
    deleteAssigned,
};
