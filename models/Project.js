var mongoose = require('mongoose');
var express = require('express');
var app = express();
var Schema = mongoose.Schema;

// Define collection and schema for Items
var project = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    language: {type: String, required: true},
    //concepts: [{type: String}]
}, {
    collection: 'projects'
});
var Project = mongoose.model('Project', project)
module.exports = Project;