const { Post } = require('../models');

const postData = [
    {
      title: 'Post',
      content: 'text...',
      userId: 1,
    },
    {
      title: 'Post',
     content: 'text...',
      userId: 2,
    },
    {
      title: 'Post',
      content: 'text...',
      userId: 3,
    },
  
  ]
  
  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;
