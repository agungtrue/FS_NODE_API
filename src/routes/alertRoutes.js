const express = require('express');
const router = express.Router();

// controller
const alertController = require('../controllers/alertController');

// middleware
const alertMiddleware = require('../middleware/alert.middleware');

// Auth router
router.route('/')
    .get(alertController.getAllAlerts)
    .post(alertMiddleware.create, alertController.createAlert)

module.exports = router;