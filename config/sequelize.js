const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mysqldb-v2',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();

module.exports = sequelize;