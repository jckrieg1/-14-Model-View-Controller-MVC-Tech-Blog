const { Post } = require('../models');

const postData = [
    {
      title: 'Post',
      post_text: 'text...',
      user_id: 1,
    },
    {
      title: 'Post',
      post_text: 'text...',
      user_id: 2,
    },
    {
      title: 'Post',
      post_text: 'text...',
      user_id: 3,
    },
  
  ]
  
  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;
