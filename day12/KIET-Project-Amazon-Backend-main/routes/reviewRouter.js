const express = require("express");
const review = require('../controllers/review1.js')
const reviewRouter = express.Router();

reviewRouter.route('/:id')
    .get(review.getReview)
    .post(review.postReview)

module.exports = reviewRouter;