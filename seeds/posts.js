const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "buggin-out",
    "postContent": "I am so stuck on this bug!",
    "userId": 1
  },
  {
    "postTitle": "Jobs",
    "postContent": "Anyone else nervous about applying to jobs?",
    "userId": 2
  },
  {
    "postTitle": "coding-game",
    "postContent": "I'm having so much fun!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;