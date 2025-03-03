const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    flavor: {type: String, required: true},
    glaze: {type: String,  required: true},
    floor: {type: Number,  required: true},

})

module.exports = mongoose.model("cakes", schema);
