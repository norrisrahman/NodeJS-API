var mongoose = require('mongoose');

var ScheduleSchema = mongoose.Schema({
    tanggal: String,
    jam: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
