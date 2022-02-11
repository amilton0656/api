const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'node',
    'xxx',
    'xxx',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
)

module.exports = sequelize


