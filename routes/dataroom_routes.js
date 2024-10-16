const express = require('express');
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getdatarooms,getdataroomID,postdataroom,updatedataroom,deletedataroom } =require("../controller/dataroom_controller");

router.get('/drooms',authenticateToken,getdatarooms); // Get all products
router.get('/droom/:id',authenticateToken,getdataroomID ); // Get a product by ID
router.post('/droom',authenticateToken,postdataroom); // Create a new product
router.put('/droom/:id',authenticateToken,updatedataroom); // Update a product by ID
router.delete('/droom/:id',authenticateToken,deletedataroom);

module.exports = router;