const Testimonial = require("../models/Testimonial.Model");

// Create a new testimonial
const createTestimonial = async (req, res) => {
    try {
        const data = req.body;

        // Create a new testimonial instance
        const testimonial = new Testimonial(data);
        await testimonial.save();

        console.log(testimonial);

        res.status(201).json({ success: true, message: "Testimonial created successfully", data: testimonial });
    } catch (error) {
        console.error("Create Error:", error);
        res.status(500).json({ success: false, message: "Failed to create testimonial", details: error.message });
    }
};

// Get all testimonials
const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();

        res.status(200).json({
            success: true,
            data: testimonials,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to retrieve testimonials",
            details: error.message,
        });
    }
};

// Get a testimonial by ID
const getTestimonialById = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await Testimonial.findById(id);

        if (!testimonial) {
            return res.status(404).json({
                success: false,
                error: "Testimonial not found",
            });
        }

        res.status(200).json({
            success: true,
            data: testimonial,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to retrieve testimonial",
            details: error.message,
        });
    }
};

// Update a testimonial by ID
const updateTestimonial = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and update the testimonial
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            id,
            { ...req.body, updatedAt: new Date() },
            { new: true } // Return the updated document
        );

        if (!updatedTestimonial) {
            return res.status(404).json({ success: false, error: "Testimonial not found" });
        }

        res.status(200).json({
            success: true,
            message: "Testimonial updated successfully",
            data: updatedTestimonial,
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Failed to update testimonial", details: error.message });
    }
};

// Delete a testimonial by ID
const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return res.status(404).json({ success: false, error: "Testimonial not found" });
        }

        res.status(200).json({
            success: true,
            message: "Testimonial deleted successfully",
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, error: "Failed to delete testimonial", details: error.message });
    }
};

module.exports = {
    createTestimonial,
    getAllTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
};
