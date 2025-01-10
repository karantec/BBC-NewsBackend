const express = require("express");
const { createAssigned, getAllAssigned, getAssignedById, updateAssigned, deleteAssigned } = require("../controllers/AssignedController");

const router = express.Router();

// Route to create a new project assignment
router.post("/assignment", createAssigned);

// Route to get all project assignments
router.get("/assignments", getAllAssigned);

// Route to get a project assignment by ID
router.get("/:id", getAssignedById);

// Route to update a project assignment by ID
router.put("/:id", updateAssigned);

// Route to delete a project assignment by ID
router.delete("/:id", deleteAssigned);

module.exports = router;
