const { User } = require('../models');

const userdata =
[
  {
    "username": "Test",
    "password": "password12345"
  },
  {
    "username": "Jim",
    "password": "password12345"
  },
  {
    "username": "Pam",
    "password": "password12345"
  },
  {
    "username": "Dwight",
    "password": "password12345"
  },
  {
    "username": "Michael",
    "password": "password12345"
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;