const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'amilton',
    'amilton',
    'mandrake313131',
    {
        dialect: 'mysql',
        host: 'mysql.amilton.com.br'
    }
)



module.exports = sequelize


