const router = require("express").Router();
const { response } = require("express");
const { Post, User, Comment } = require("../models/");
const withAuth = require('../utils/auth')

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.map((post) => post.get({ plain: true }));
    res.render("all-posts", {
      posts: post,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Post.findbyPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [User]
                }
            ],
    })


    const post = postData.get({
        plain: true
    });

    res.render("post", {
        ...post,
        logged_in: req.session.logged_in
    });

} 
catch (err) {
    res.status(500).json(err);
}

});

router.get('dashboard', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },
            include: [
                {
                    model: Post,
                }],
            });

        const user = userData.get({
            plain: true
        });

        res.render('dashboard', {
        ...user,
        logged_in: true   
        });
        }
        catch (err) {
            res.status(500).json(err);
        }
        });




router.get('/login', (req, res) => {
   if(req.session.login) {
    res.redirect('/');
    return;
   }
    res.render("login");
   });

router.get('/signup', (req, res) => {
    if(req.session.signup) {
        res.redirect('/');
        return;
    }
    res.render("signup");
})
   


module.exports = router;
