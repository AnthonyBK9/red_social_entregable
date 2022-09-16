const uuid = require("uuid");

const Post = require("../models/post.model");
const User = require("../models/user.model");

const getAllPosts = async () => {
    const data = Post.findAll();
    return data;
}

const getPostById = async (userId) => {
    const data = await Post.findAll({
        where: {}
    })
}