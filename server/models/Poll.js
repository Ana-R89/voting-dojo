const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name."],
        minlength: [3, 'Pet name must be at least 3 characters']
    },
    type: {
        type: String,
        required: [true, "Please enter a type."],
        minlength: [3, 'Pet type must be at least 3 characters']
    },
    question: {
        type: String,
        required: [true, "Please enter a description."],
        minlength: [3, 'Pet description must be at least 3 characters']
    },
    response1:{
        type: Array,
        validate: [
            (val) => {
                val.length <= 3
            }, "No more than 3 Skills Allowed"
        ]
    },
    response2:{
        type: Array,
        validate: [
            (val) => {
                val.length <= 3
            }, "No more than 3 Skills Allowed"
        ]
    },
    response3:{
        type: Array,
        validate: [
            (val) => {
                val.length <= 3
            }, "No more than 3 Skills Allowed"
        ]
    }

}, {timestamps: true});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;