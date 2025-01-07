const Carrier = require("../models/CarrierModel");

// Create a new job posting
const createCareer = async (req, res) => {
    try {
        const data = req.body;

        // Create a new Carrier instance
        const career = new Carrier(data);
        await career.save();

        console.log(career);

        res.status(201).json({ success: true, message: "Job posting created successfully", data: career });
    } catch (error) {
        console.error("Create Error:", error);
        res.status(500).json({ success: false, message: "Failed to create job posting", details: error.message });
    }
};

// Get all job postings
const getAllCarrier = async (req, res) => {
    try {
        const careers = await Carrier.find();

        res.status(200).json({
            success: true,
            data: careers,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to retrieve job postings",
            details: error.message,
        });
    }
};

// Get a job posting by ID
const getCarrierId = async (req, res) => {
    try {
        const { id } = req.params;

        const career = await Carrier.findById(id);

        if (!career) {
            return res.status(404).json({
                success: false,
                error: "Job posting not found",
            });
        }

        res.status(200).json({
            success: true,
            data: career,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to retrieve job posting",
            details: error.message,
        });
    }
};

// Update a job posting by ID
const updateCarrier = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedCareer = await Carrier.findByIdAndUpdate(
            id,
            { ...req.body, updatedAt: new Date() },
            { new: true }
        );

        if (!updatedCareer) {
            return res.status(404).json({ success: false, error: "Job posting not found" });
        }

        res.status(200).json({
            success: true,
            message: "Job posting updated successfully",
            data: updatedCareer,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Failed to update job posting", details: error.message });
    }
};

// Delete a job posting by ID
const deleteCarrier = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCareer = await Carrier.findByIdAndDelete(id);

        if (!deletedCareer) {
            return res.status(404).json({ success: false, error: "Job posting not found" });
        }

        res.status(200).json({
            success: true,
            message: "Job posting deleted successfully",
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Failed to delete job posting", details: error.message });
    }
};

module.exports = {
    createCareer,
    getAllCarrier,
    getCarrierId,
    updateCarrier,
    deleteCarrier,
};
