var mongoose = require('mongoose');
// Setup schema
var TemperatureModel = mongoose.Schema({
    grades: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

let Temperature = module.exports = mongoose.model('temperature', TemperatureModel);
module.exports.get = function (callback, limit) {
    Temperature.find(callback).limit(limit);
}
