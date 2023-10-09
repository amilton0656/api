const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const CentroCustos = require('./mo_centrocustos')

const CxMovimento = sequelize.define('cx_movimento', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("(CURRENT_DATE())")
  },
  sinal: {
    type: Sequelize.STRING(1),
    allowNull: false,
    defaultValue: "+"
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  historico: Sequelize.TEXT,
  id_centrocustos: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },


}, {
  tableName: 'cx_movimento',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});


CentroCustos.hasOne(CxMovimento, { foreignKey: 'id_centrocustos' })

module.exports = CxMovimento