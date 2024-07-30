const { model, Schema} = require('mongoose')
const mongoose = require("mongoose");
mongoose.Schema.Types.String.set('trim', true);

const commentSchema =

    new Schema({
        _id: mongoose.Schema.Types.ObjectId,

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        createdAt: String,

        rating: Number,

        title: String,

        description: String,

    });

module.exports = model('Comment', commentSchema)
10:27
const mongoose = require('mongoose')
const {model, Schema} = require('mongoose')
mongoose.Schema.Types.String.set('trim', true);

const userSchema = new Schema ({
        _id: mongoose.Schema.Types.ObjectId,

        firstName: {
            type: String,
        },

        lastName: {
            type: String,
        },

        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            },
        ]
    }
)

module.exports = model('User', userSchema)





