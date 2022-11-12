const { User } = require('../models');

const userData = [
    {
        username: 'user123',
        password: '123abc'
    },
    {
        username: 'sara@example.com',
        password: '123abc'
    },
    {
        username: 'suzie@example.com',
        password: '123abc'
    },
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;