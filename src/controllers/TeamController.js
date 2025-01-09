const TeamMember = require("../models/Team.Models");

// Create a new team member
const createTeamMember = async (req, res) => {
    try {
        const data = req.body;

        // Create a new team member instance
        const teamMember = new TeamMember(data);
        await teamMember.save();

        console.log(teamMember);

        res.status(201).json({ success: true, message: "Team member created successfully", data: teamMember });
    } catch (error) {
        console.error("Create Error:", error);
        res.status(500).json({ success: false, message: "Failed to create team member", details: error.message });
    }
};
const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                error: 'File size limit exceeded. Maximum size is 10MB.'
            });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
                success: false,
                error: 'Too many files uploaded.'
            });
        }
    }
    next(err);
};
// Get all team members
const getAllTeamMembers = async (req, res) => {
    try {
        const teamMembers = await TeamMember.find();

        res.status(200).json({
            success: true,
            data: teamMembers,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to retrieve team members",
            details: error.message,
        });
    }
};

// Get a team member by ID
const getTeamMemberById = async (req, res) => {
    try {
        const { id } = req.params;

        const teamMember = await TeamMember.findById(id);

        if (!teamMember) {
            return res.status(404).json({
                success: false,
                error: "Team member not found",
            });
        }

        res.status(200).json({
            success: true,
            data: teamMember,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to retrieve team member",
            details: error.message,
        });
    }
};

// Update a team member by ID
const updateTeamMember = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and update the team member
        const updatedTeamMember = await TeamMember.findByIdAndUpdate(
            id,
            { ...req.body, updatedAt: new Date() },
            { new: true } // Return the updated document
        );

        if (!updatedTeamMember) {
            return res.status(404).json({ success: false, error: "Team member not found" });
        }

        res.status(200).json({
            success: true,
            message: "Team member updated successfully",
            data: updatedTeamMember,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Failed to update team member", details: error.message });
    }
};

// Delete a team member by ID
const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTeamMember = await TeamMember.findByIdAndDelete(id);

        if (!deletedTeamMember) {
            return res.status(404).json({ success: false, error: "Team member not found" });
        }

        res.status(200).json({
            success: true,
            message: "Team member deleted successfully",
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Failed to delete team member", details: error.message });
    }
};

module.exports = {
    createTeamMember,
    handleMulterError,
    getAllTeamMembers,
    getTeamMemberById,
    updateTeamMember,
    deleteTeamMember,
};
