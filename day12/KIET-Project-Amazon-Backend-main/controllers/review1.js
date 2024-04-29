const reviewModel = require('../models/review.js');

const getReview = async (req, res) => {
    query = req.query;
    params = req.params;
    console.log(qruey,params)
    try {
        const review = await reviewModel.find();
        res.json({
            status: 'success',
            results: review.length,
            data: {
                review,
            }
        });
    }
    catch (err) {
        res.status(403);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}

const postReview = async (req, res) => {
    try {
        const { _id, createdAt, updatedAt, ...reqData } = req.body;
        const review = await productModel.create(reqData);
        res.json({
            status: 'success',
            results: 1,
            data: {
                review,
            }
        });
    }
    catch (err) {
        res.status(403);
        console.log(err)
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        });
    }
}


module.exports = {
    postReview,
    getReview
}