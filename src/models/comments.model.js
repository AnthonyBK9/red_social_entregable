const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Comments = db.define('comments', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    postId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'post_id'
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'user_id'
    },
    text: {
        allowNull: false,
        type: DataTypes.STRING,
    }
});

module.exports = Comments;
