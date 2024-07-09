// lib/sequelize.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect:  "mysql",
  host:  "localhost",
  port:   "3306",
  username: "root",
  password:  "",
  database:  "nextui",
  dialectModule: require('mysql2'),
  benchmark:true
});

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log("connection has been succesfully made from file");
    }
    catch (error){
        console.error("Unable to connect lefhoko", error);
    }
})();
module.exports = sequelize;
