const express = require('express');
const router = express.Router();
const {
    createNews,
    handleMulterError,
     updateModalData, deleteModalData, 
    getModalDataById, getModalData, getCatgoryNews,
    getAllNews} = require('../controllers/News.Controller');

// Route to create a new entry with image upload
router.post('/createNews',createNews);

// Route to update existing modal data
router.put('/updateNews/:id', updateModalData);

// Route to delete existing modal data
router.delete('/deleteNews/:id', deleteModalData);
// route to delte  get by id 
router.get('/News/:id', getModalDataById);
router.get('/Newscategory/:id',getCatgoryNews);


// Route to get all modal data or a specific entry by ID
router.get('/News', getAllNews);
router.use(handleMulterError);

module.exports = router;
