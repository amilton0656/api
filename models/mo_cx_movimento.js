const Sequelize = require('sequelize')

const sequelize = require('../util/apinodeDBconnection')

const Empreendimento = require('./mo_empreendimento')
const CentroCustos = require('./mo_centrocustos')

const CxMovimento = sequelize.define('cx_movimento', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: Sequelize.DATE,
  sinal: Sequelize.STRING(1),
  valor: Sequelize.FLOAT,
  historico: Sequelize.TEXT,
  id_empreendimento: Sequelize.INTEGER,
  id_centrocustos: Sequelize.INTEGER,


}, {
  tableName: 'cx_movimento',
  timestamp: false,
  createdAt: false,
  updatedAt: false
});


Empreendimento.hasOne(CxMovimento, { foreignKey: 'id_empreendimento' })
CentroCustos.hasOne(CxMovimento, { foreignKey: 'id_centrocustos' })

module.exports = CxMovimento