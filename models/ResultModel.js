var mongoose = require("mongoose")

var Schema = mongoose.Schema

var row = new Schema({
    row: {type: String, required: true},
    rowVal: {type: Number, required: true},
})

var resultSchema = new Schema({
    col: {type: String, required: true},
    colVal: {type: row, required: true}
    
    
})

module.exports = mongoose.model("Result", resultSchema);
