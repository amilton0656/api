const MktHistorico = require('../models/mo_mkt_historico')
const jwt = require('../util/jwt')
const email = require('../testes/email')

exports.addMktHistorico = (req, res, next) => {
  const registro = req.body
  console.log(registro)
  MktHistorico.create(registro)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updMktHistorico = (req, res, next) => {
  const id = req.body.id
  const body = req.body
  console.log(id)
  console.log(body)
  MktHistorico.findByPk(id)
    .then(registro => {
      registro.update(body)
    })
    .then(registro => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao atualizar.')
    })
}

exports.delMktHistorico = (req, res, next) => {
  const id = req.params.id

  MktHistorico.findByPk(id)
    .then(usu => {
      usu.destroy(usu)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
  // const id = req.params.id

  // registro.sequelize.query(`
  // delete from registros where id = :id`,
  // { replacements: { id } })
  //   .then(registro => {
  //     res.status(200).json(parseInt(id))
  //   })
  //   .catch(err => {
  //     res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
  //   });
}

exports.getMktHistoricoById = (req, res, next) => {
  const id = req.params.id
  MktHistorico.findByPk(id)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Resistro não encontrado.')
    })
}

exports.getMktHistoricoByDescricao = (req, res, next) => {
  const { nome } = req.params
  const busca = '%' + nome.toLowerCase() + '%'

  MktHistorico.sequelize.query(`select *
  from mkt_historico
  where lower(descricao) like ?
  order by descricao`,
    { replacements: [busca] })
    .then(registro => {
      res.status(200).json(registro[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}


exports.getMktHistoricos = (req, res, next) => {
  MktHistorico.sequelize.query(`
  select *
  from mkt_historico
  order by descricao`)
    .then(registros => {
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}







