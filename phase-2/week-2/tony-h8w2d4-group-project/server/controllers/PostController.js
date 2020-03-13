const { Post } = require('../models');
class PostController {
    static index(req, res, next) {
        Post.find({}, function (posts) {
            res.json(posts)
        })
    }

    static upload(req, res, next) {
        const { title } = req.body;
        Post.create({
            title
        }, function (err, post) {
            if (err) {
                next(err);
            }
            else {
                res.status(201).json({ message: "Post created" });
            }
        })
    }


}

module.exports = PostController;