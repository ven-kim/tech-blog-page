const { User } = require('../models');

const userData = [
    {
        username: "bob1",
        email: "bob1@gmail.com",
        password: "bob1234"
    },
    {
        username: "joe2",
        email: "joe2b@gmail.com",
        password: "joe1234"
    },
    {
        username: "jimmy3",
        email: "jimmy3@gmail.com",
        password: "jimmy1234"
    },
    {
        username: "sean4",
        email: "sean4@gmail.com",
        password: "sean1234"
    },
    {
        username: "tom5",
        email: "tom5@gmail.com",
        password: "tom1234"
    },
    {
        username: "john6",
        email: "john5@gmail.com",
        password: "john1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;