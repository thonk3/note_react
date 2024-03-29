const mongoose = require("mongoose")

const GoalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [ true, "please set a text value" ],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', GoalSchema);