const express = require('express');
const { createCareer, getAllCarrier, getCarrierId, updateCarrier, deleteCarrier } = require('../controllers/CarrierController');
const router = express.Router();


// Route to create a new job posting
router.post('/careers', createCareer);

// Route to get all job postings
router.get('/careers', getAllCarrier);

// Route to get a single job posting by ID
router.get('/careers/:id', getCarrierId);

// Route to update a job posting by ID
router.put('/careers/:id', updateCarrier);

// Route to delete a job posting by ID
router.delete('/careers/:id', deleteCarrier);

module.exports = router;
