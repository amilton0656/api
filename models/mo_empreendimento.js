const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const Empreendimento = sequelize.define('empreendimentos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: Sequelize.STRING(60),
}, {
  tableName: 'empreendimentos',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Empreendimento