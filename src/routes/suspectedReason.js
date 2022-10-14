const express = require('express');
const router = express.Router();

// controller
const suspectedReasonController = require('../controllers/suspectedReason');

// middleware
const alertMiddleware = require('../middleware/suspected.middleware');

// Auth router
router.route('/')
    .get(suspectedReasonController.getAllReason)
    .post(alertMiddleware.create, suspectedReasonController.createReason)
    
module.exports = router;