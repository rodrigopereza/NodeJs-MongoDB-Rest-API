const mongoose  = require('mongoose');

const Player = new mongoose.Schema({
    firstName: {Type: String, default:''},
    lastName: {Type: String, default:''},
    position: {Type: String, default:''},
    age: {Type: Number, default:0},
    team: {Type: String, default:''}
});

module.exports = mongoose.model('Player',Player);