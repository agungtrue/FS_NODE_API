const Reason = require('../models/suspectedReason'); // model init
const factoryMethod = require('../services/handlerCommonMethod'); // common method

// create
exports.createReason = factoryMethod.createOne(Reason);

// update
exports.updateReason = factoryMethod.updateOne(Reason);

// get all
exports.getAllReason = factoryMethod.getAll(Reason);

// get one
exports.getOneReason = factoryMethod.getOne(Reason);

// delete
exports.deleteReason = factoryMethod.deleteOne(Reason);