const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getdatatools,getdatatoolID,postdatatool,updatedatatool,deletedatatool } =require("../controller/datatool_controller");

router.get('/tools',authenticateToken,getdatatools); // Get all products
router.get('/tool/:id',authenticateToken,getdatatoolID ); // Get a product by ID
router.post('/tools',authenticateToken,postdatatool); // Create a new product
router.put('/tool/:id',authenticateToken,updatedatatool); // Update a product by ID
router.delete('/tool/:id',authenticateToken,deletedatatool);

module.exports = router;