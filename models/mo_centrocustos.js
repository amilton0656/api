const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const CentroCustos = sequelize.define('centro_custos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  descricao: Sequelize.STRING(60),
}, {
  tableName: 'centro_custos',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});

module.exports = CentroCustos