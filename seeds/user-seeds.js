const { User } = require('../models');

const userData = [
    {
        username: 'user123',
        email: 'user123@gmail.com',
        password: 'user123',

       

    },
    {
        username: 'sara@example.com',
        email: 'user1234@gmail.com',
        password: '123abc'
    },
    {
        username: 'suzie@example.com',
        email: 'user12345@gmail.com',
        password: '123abc'
    },
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;