const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Blog.find().populate('author')
            .then((blogs) => {
                console.log(blogs)
                res.send(blogs)})
            .catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Blog.create({ description, author: _id })
            .then((createdBlog) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdBlog } }),
                    models.Blog.findOne({ _id: createdBlog._id })
                ]);
            })
            .then(([modifiedObj, blogObj]) => {
                res.send(blogObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Blog.updateOne({ _id: id }, { description })
            .then((updatedBlog) => res.send(updatedBlog))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Blog.deleteOne({ _id: id })
            .then((removedBlog) => res.send(removedBlog))
            .catch(next)
    }
};