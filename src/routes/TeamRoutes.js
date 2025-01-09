const express = require('express');
const { createTeamMember, getAllTeamMembers, getTeamMemberById, updateTeamMember, deleteTeamMember,handleMulterError } = require('../controllers/TeamController');
const router = express.Router();



// Create a new team member
router.post('/team', createTeamMember);

// Get all team members
router.get('/teams', getAllTeamMembers);


// Get a team member by ID
router.get('/:id', getTeamMemberById);

// Update a team member by ID
router.put('/:id', updateTeamMember);

// Delete a team member by ID
router.delete('/:id', deleteTeamMember);

router.use(handleMulterError);
module.exports = router;
