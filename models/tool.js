const mongoose = require('mongoose');
const toolSchema = new mongoose.Schema({
    date_time: { type: Date, required: true },
    time_in: { type: String, required: false }, // Consider using Date type
    time_out: { type: String, required: false}, // Consider using Date type
    tool_name: { type: String, required: false },
    user_name: { type: String, required: false },
    phone: { type: String, required: false },
    objective: { type: String, required: false }, // Corrected spelling
    adviser: { type: String, required: false },

}, { timestamps: false, versionKey: false });

module.exports = mongoose.model('tool', toolSchema);
