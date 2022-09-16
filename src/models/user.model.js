const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdayDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'birthday_date'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,

    },
    role: {
        allowNull: false,
        type: DataTypes.UUID
    },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'profile_image'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
})

module.exports = Users