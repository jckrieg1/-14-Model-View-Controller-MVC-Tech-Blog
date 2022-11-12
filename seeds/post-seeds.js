const { Post } = require('../models');

const postData = [
    {
      title: 'Post',
      contnet: 'text...',
      userId: 1,
    },
    {
      title: 'Post',
     contnet: 'text...',
      userId: 2,
    },
    {
      title: 'Post',
      contnet: 'text...',
      userId: 3,
    },
  
  ]
  
  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;
