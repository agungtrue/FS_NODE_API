const express = require('express');
const router = express.Router();

// controller
const alertController = require('../controllers/alertController');

// middleware
const alertMiddleware = require('../middleware/alert.middleware');

// Auth router
router.route('/')
    .get(alertController.getAllAlerts)
    .post(alertMiddleware.create, alertController.createAlert);

router.route('/:id')
    .patch(alertMiddleware.create, alertController.updateAlert);

module.exports = router;