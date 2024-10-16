const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getTools,getToolID,postTool,updateTool,deleteTool } =require("../controller/toolController");

router.get('/tools',authenticateToken,getTools); // Get all products
router.get('/tool/:id',authenticateToken,getToolID ); // Get a product by ID
router.post('/tool',authenticateToken,postTool); // Create a new product
router.put('/tool/:id',authenticateToken,updateTool); // Update a product by ID
router.delete('/tool/:id',authenticateToken,deleteTool);

module.exports = router;