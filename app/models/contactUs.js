const mongoose = require('mongoose');

const contactUs = new mongoose.Schema({
    'name': 'string',
    'email': 'string',
    'phone': 'string',
    'message': 'string'
}, { timestamps: true });

module.exports = mongoose.model('contactus', contactUs);