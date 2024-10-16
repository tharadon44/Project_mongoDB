const mongoose = require('mongoose');
const datatoolSchema = new mongoose.Schema({
    tool_number: { type: String, required: true },
    tool_name: { type: String, required: true },
   
}, { timestamps: false, versionKey: false });

module.exports = mongoose.model('datatool', datatoolSchema);