const { User } = require('../models');

const userData = [
    {
        name: 'John Doe',
        email: 'user123@gmail.com',
        password: 'user123',
    },
    {
        name: 'Sara Johnson',
        email: 'user1234@gmail.com',
        password: '123abc'
    },
    {
        name: 'Suzie Smith',
        email: 'user12345@gmail.com',
        password: '123abc'
    },
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;