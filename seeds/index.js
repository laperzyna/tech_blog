const sequelize = require('../config/config');
const seedUser = require('./seeded-users');
const seedPost = require('./posts');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  process.exit(0);
};

seedAll();