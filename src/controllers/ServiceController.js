const Services = require("../models/Service.Model");

// Create a new testimonial
const createServices = async (req, res) => {
    try {
        const data = req.body;

        // Create a new testimonial instance
        const testimonial = new Services(data);
        await testimonial.save();

        console.log(testimonial);

        res.status(201).json({ success: true, message: "Testimonial created successfully", data: Services });
    } catch (error) {
        console.error("Create Error:", error);
        res.status(500).json({ success: false, message: "Failed to create testimonial", details: error.message });
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
// Get all testimonials
const getAllServices = async (req, res) => {
    try {
        const testimonials = await Services.find();

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
const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;

        const testimonial = await Services.findById(id);

        if (!testimonial) {
            return res.status(404).json({
                success: false,
                error: "Testimonial not found",
            });
        }

        res.status(200).json({
            success: true,
            data: Services,
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
const updateService = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and update the testimonial
        const updatedTestimonial = await Services.findByIdAndUpdate(
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
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTestimonial = await Services.findByIdAndDelete(id);

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
    createServices,
    handleMulterError,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
};
