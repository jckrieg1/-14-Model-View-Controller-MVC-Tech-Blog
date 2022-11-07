const { User } = require('../models');

const userData = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        password: '123abc'
    },
    {
        first_name: 'Sara',
        last_name: 'Johnson',
        email: 'sara@example.com',
        password: '123abc'
    },
    {
        first_name: 'Suzie',
        last_name: 'Smith',
        email: 'suzie@example.com',
        password: '123abc'
    },
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;