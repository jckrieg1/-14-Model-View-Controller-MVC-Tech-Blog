const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Great!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Cool!",
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: "Awesome!",
    post_id: 1,
    user_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;