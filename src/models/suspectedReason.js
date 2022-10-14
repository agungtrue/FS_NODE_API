const mongoose = require('mongoose');

const suspectedReason = new mongoose.Schema({
    reason_name: {
        type: String,
        required: [true, 'must have a reason_name'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Reason = mongoose.model('Reason', suspectedReason);

module.exports = Reason;