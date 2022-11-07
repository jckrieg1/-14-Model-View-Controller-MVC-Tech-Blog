const router = require('express').Router();
const Post = require('../models/post');
 














// Takes place of real data
// Render out in corresponding handlebars file with {{ title }} 
// const blogPosts = [
//     {
//         title: "",
//         descrption: "" 
//     },
// ];




// // Get all blog posts:
// router.get('/', async (req, res) => {
//     const allPosts = await Post.findall()
//     const finalData = allPosts.map( post => post.get({ plain: true }) )
//     console.log(finalData)
//     res.render('all', { data: finalData });
// });

// // Get one post: 
// router.get('/post/:num', async (req, res) => {
//     return res.render('post', blogPosts[req.params.num - 1]);
// });


// // get one post without serializing data
// // router.get('/post/:id', async (req, res) => {
// //     try {
// //       const postData = await Post.findByPk(req.params.id);
// //       console.log(postData)
// //       res.render('post', postData);
// //     } catch (err) {
// //       res.status(500).json(err);
// //     }
// //   });
  
//   // get one post with serialized data
//   router.get('/post /:id', async (req, res) => {
//     try {
//     // Search the database for a post with an id that matches params
//     const postData = await Post.findByPk(req.params.id);
//     console.log(postData)
//     // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
//     const post = postData.get({ plain: true });
//     // Then, the 'post' template is rendered and dish is passed into the template.
//     res.render('post', post);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });








module.exports = router;
