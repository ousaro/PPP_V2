const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema= new Schema({
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    }

},{ timestamps: true })


module.exports = mongoose.model('Post', postSchema);
