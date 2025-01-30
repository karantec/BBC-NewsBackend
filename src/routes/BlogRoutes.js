const express = require('express');
const router = express.Router();
const {
   
    createBlog,
    updateBlog,
    getBlog,
    getBlogs,
    deleteBlog
} = require('../controllers/Blog.Controller');

// Route to create new interior data
router.post('/createblogs', createBlog);

// Route to update existing interior data by ID
router.put('/update/blogs/:id', updateBlog);

// Route to delete interior data by ID
router.delete('/blogs/:id', deleteBlog);
// Get route for retrieving all interior data
router.get('/', getBlogs); // New route for all data

router.get('/blogs/:id', getBlog);
// Middleware to handle file upload errors
// router.use(handleMulterError);

module.exports = router;
