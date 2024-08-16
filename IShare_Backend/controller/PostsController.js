const Post = require('../model/Posts');
const User = require('../model/User');

// Create a new post
const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();

        const user = await User.findById(newPost.author);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.posts.push(newPost._id);
        await user.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'userName');
        res.json(posts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a post by ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'userName');
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a post by ID
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a post by ID
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        await User.findByIdAndUpdate(post.author, {
            $pull: { posts: post._id }
        });

        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getFilterPosts = async (req, res) => {
    try {
        const { author, startDate, endDate,category, keyword } = req.query;
        
        let filter = {};

        if (author) {
            filter.author = author; // Filter by author ID
        }
        if (category) {
            filter.category = category; // Filter by author ID
        }

        if (startDate || endDate) {
            filter.createdAt = {}; // Initialize date filter

            if (startDate) {
                filter.createdAt.$gte = new Date(startDate); // Greater than or equal to startDate
            }

            if (endDate) {
                filter.createdAt.$lte = new Date(endDate); // Less than or equal to endDate
            }
        }

        if (keyword) {
            filter.content = { $regex: keyword, $options: 'i' }; // Case-insensitive search in the content field
        }

        const posts = await Post.find(filter).populate('author', 'userName');
        res.json(posts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    getFilterPosts
};
