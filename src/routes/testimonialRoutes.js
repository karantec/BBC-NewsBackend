const express = require('express');
const router = express.Router();
const {
    createTestimonial,
    handleMulterError,
    getAllTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
} = require('../controllers/TestimonialController');

// Route to create a new testimonial
router.post('/testimonials', createTestimonial);

// Route to get all testimonials
router.get('/testimonials', getAllTestimonials);

// Route to get a single testimonial by ID
router.get('/testimonials/:id', getTestimonialById);

// Route to update a testimonial by ID
router.put('/testimonials/:id', updateTestimonial);

// Route to delete a testimonial by ID
router.delete('/testimonials/:id', deleteTestimonial);

router.use(handleMulterError);

module.exports = router;
