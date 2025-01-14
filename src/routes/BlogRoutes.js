const express = require('express');
const router = express.Router();
const {
   
    createInteriorData,
    handleMulterError,
    updateInteriorData,
    getAllInteriorData,
    getInteriorDataById,
    deleteInteriorData
} = require('../controllers/Blog.Controller');

// Route to create new interior data
router.post('/createblogs', createInteriorData);

// Route to update existing interior data by ID
router.put('/update/blogs/:id', updateInteriorData);

// Route to delete interior data by ID
router.delete('/blogs/:id', deleteInteriorData);
// Get route for retrieving all interior data
router.get('/', getAllInteriorData); // New route for all data

router.get('/blogs/:id', getInteriorDataById);
// Middleware to handle file upload errors
router.use(handleMulterError);

module.exports = router;
