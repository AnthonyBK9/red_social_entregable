const Users = require('./user.model');
const Roles = require('./roles.model');
const Comments = require('./comments.model');
const PostImages = require('./post_images.model');
const Posts = require('./posts.model');


const initModels = () => {
    //? Users -> Posts
    Users.hasOne(Roles)
    Roles.belongsToMany(Users)
    
    //? Users <-> post

    U
}

module.exports = initModels
