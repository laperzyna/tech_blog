const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Javascript got be buggin-out!!",
    "postContent": "I am so stuck on this bug! Everything keeps breaking!!",
    "userId": 1
  },
  {
    "postTitle": "Jobs",
    "postContent": "Anyone else nervous about applying to jobs??",
    "userId": 2
  },
  {
    "postTitle": "In the coding game!",
    "postContent": "I'm having so much fun coding!!",
    "userId": 3
  },
  {
    "postTitle": "TA?",
    "postContent": "I want to become a coding TA. It looks like fun!",
    "userId": 4
  },
  {
    "postTitle": "Project Idea",
    "postContent": "I'm having so much fun coming up with project ideas!",
    "userId": 5
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;