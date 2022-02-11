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

sequelize.authenticate()
    .then(() => console.log('Conectado!'))
    .catch(err => console.log(err))

module.exports = sequelize


