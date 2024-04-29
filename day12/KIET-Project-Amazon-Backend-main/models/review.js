const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }

})
const reviewModel = mongoose.model('review', reviewSchema);
module.exports = reviewModel;