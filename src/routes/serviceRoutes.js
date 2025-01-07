const express = require('express');
const router = express.Router();

const { createServices, getAllServices, getServiceById, updateService, deleteService } = require('../controllers/ServiceController');

// Route to create a new testimonial
router.post('/services', createServices);

// Route to get all testimonials
router.get('/service', getAllServices);

// Route to get a single testimonial by ID
router.get('/services/:id', getServiceById);

// Route to update a testimonial by ID
router.put('/services/:id', updateService);

// Route to delete a testimonial by ID
router.delete('/services/:id', deleteService);

module.exports = router;
