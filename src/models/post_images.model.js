const { DataTypes } = require('sequelize');

const { db } = require('../utils/database');

const PostImages = db.define('post_images', {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID
    },
    url: {
        allowNull: false,
        type: DataTypes.STRING
    },
    postId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'post_id'
    }
});

module.exports = PostImages;