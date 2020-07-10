const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = new Schema({
    name: String,
    age: Number,
    graduation: String,
    
},{
    timestamps: true,
});

module.exports = mongoose.model('Customer',Customer);