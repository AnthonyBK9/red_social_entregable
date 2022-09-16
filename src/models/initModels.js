const Users = require('./user.model');
const Roles = require('./roles.model');
const Comments = require('./comments.model');
const PostImages = require('./post_images.model');
const Posts = require('./posts.model');


const initModels = () => {
    //? Users -> Posts
    Users.hasMany(Roles)
    Roles.belongsTo(Users)
    
    //? Users -> post
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Users -> comments
    Users.hasMany(Comments);
    Comments.belongsTo(Users)
    //? Posts -> comments
    Posts.hasMany(Comments)
    Comments.belongsTo(Posts)

    //? Posts -> PostImages
    Posts.hasMany(PostImages)
    PostImages.belongsTo(Posts)

    // Places.hasMany(Accommodations, {foreignKey: "place_id", sourceKey: "id"});
    // Accommodations.belongsTo(Places, {foreignKey: "place_id", targetKey: "id"});
  
    // //? 1aN
    // Users.hasMany(Accommodations, {foreignKey: "host_id", sourceKey: "id"});
    // Accommodations.belongsTo(Users, {foreignKey: "host_id", targetKey: "id"});
  
}

module.exports = initModels
