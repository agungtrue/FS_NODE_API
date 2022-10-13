const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    alertId: {
        type: String,
    },
    machine: {
        type: String,
        required: [true, 'must have a machine name']
    },
    sensor: {
        type: String,
        trim: true,
        required: [true, 'a tour must have a sensor']
    },
    anomaly: {
        type: String,
        trim: true,
        required: [true, 'must have a anomaly']
    },
    soundClip: {
        type: String,
        required: [true, 'must have a machine sound clip']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

alertSchema.pre('save', async function(next){
    try {
        const currentData = await Alert.find();
        const id = String(currentData.length + 1);

        // basic unique ID
        const salt = process.env.SALT_ID;
        const idString = `#00${Math.floor(Math.random() * Date.now())}${id}${Math.floor(salt * Math.random())}`
        this.alertId = idString;

     } catch(err){
        throw err;
     }

    next();
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;