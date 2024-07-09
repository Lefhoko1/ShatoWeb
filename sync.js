// sync.js

const sequelize = require('./lib/sequelize');
const Image = require('./models/Image');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchronize the Image model with the database
    await Image.sync({ force: true }); // Use { force: true } to drop and recreate tables
    console.log('Image model synchronized successfully.');

    // Add more models sync here if needed
    // await OtherModel.sync({ force: true });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
