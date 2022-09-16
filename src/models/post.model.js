const { DataTypes } = require('sequelize');

const { db } = require('../utils/database');

const Post = db.define('post', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'user_id'
    },
    likes: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})

module.exports = Post;