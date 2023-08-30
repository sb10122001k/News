const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title:String,
    imageURL:String,
    content :String
}) 

const newsModel = mongoose.model('NEWS',newsSchema)

module.exports = newsModel;