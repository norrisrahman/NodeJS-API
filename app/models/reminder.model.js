var mongoose = require('mongoose');

var ReminderSchema = mongoose.Schema({
    jam: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Reminder', ReminderSchema);
 