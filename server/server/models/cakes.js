const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String,  required: true},
    flavor: {type: Number, required: true},
    glaze: {type: String,  required: true},
    floor: {type: Number,  required: true},

})

module.exports = mongoose.model("cakes", schema);
