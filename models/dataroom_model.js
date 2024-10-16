const mongoose = require('mongoose');
const dataroomSchema = new mongoose.Schema({
    room_number: { type: String, required: true },
    room_name: { type: String, required: true },
   
}, { timestamps: false, versionKey: false });

module.exports = mongoose.model('dataroom', dataroomSchema);