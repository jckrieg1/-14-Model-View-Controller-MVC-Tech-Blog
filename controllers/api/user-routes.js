 const router = require('express').Router();
 const User = require('../../models/User');

 router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router