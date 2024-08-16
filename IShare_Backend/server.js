const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { db } = require('./config/db');

const {
    createUser,
    getUsers,
    getUserById,
    getUserByCredentials,
    updateUser,
    deleteUser,
    addUserPost,
    addUserSavedPost
} = require('./controller/UserController');
const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    getFilterPosts
} = require('./controller/PostsController');

const app = express();
const PORT = 3500;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
db();

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

// User routes
app.post('/user', createUser); // Create a new user
app.get('/user', getUsers); // Get all users
app.post('/user/login', getUserByCredentials); // Get all users
app.get('/user/:id', getUserById); // Get user by ID
app.put('/user/:id', updateUser); // Update user by ID
app.delete('/user/:id', deleteUser); // Delete user by ID

// User posts routes
app.post('/user/:userId/posts', addUserPost); // Add a post to user's posts
app.post('/user/:userId/savedPosts', addUserSavedPost); // Add a post to user's saved posts

// Post routes
app.post('/post', createPost); // Create a new post
app.get('/post', getPosts); // Get all posts
app.get('/post/:id', getPostById); // Get post by ID
app.get('/posts/filter', getFilterPosts);
app.put('/post/:id', updatePost); // Update post by ID
app.delete('/post/:id', deletePost); // Delete post by ID

// Start server
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
