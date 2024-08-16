const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    savedPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
