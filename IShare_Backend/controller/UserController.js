const User = require('../model/User');
const Post = require('../model/Posts');

// Create a new user
const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('posts').populate('savedPosts');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a user by username and password for login
const getUserByCredentials = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ userName: username });
        
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add a post to a user's posts
const addUserPost = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const post = await Post.findById(req.body.postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        user.posts.push(post._id);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add a post to a user's saved posts
const addUserSavedPost = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        const post = await Post.findById(req.body.postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        user.savedPosts.push(post._id);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    getUserByCredentials,
    updateUser,
    deleteUser,
    addUserPost,
    addUserSavedPost
};
