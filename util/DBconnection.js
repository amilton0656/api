const Sequelize = require('sequelize')


const db = 0

let banco = 'node'
let usu = 'cota'
let pass = 'cotaatoc'
let dialect = 'postgres'
let host = 'localhost'

if (db === 1) {
    banco = 'amilton'
    usu = 'amilton'
    pass = 'mandrake313131'
    dialect = 'mysql'
    host = 'mysql.amilton.com.br'
}


const sequelize = new Sequelize(
    banco,
    usu,
    pass,
    {
        dialect,
        host
    }
)
module.exports = sequelize


