const { Comment } = require('../models');

const commentData = [
  {
    comment: "Great!",
    postId: 3,
    userId: 1
  },
  {
    comment: "Cool!",
    postId: 2,
    userId: 2
  },
  {
    comment: "Awesome!",
    postId: 1,
    userId: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;