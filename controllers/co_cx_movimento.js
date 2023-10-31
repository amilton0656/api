const CxMovimento = require('../models/mo_cx_movimento')
const jwt = require('../util/jwt')
const sequelize = require('../util/apinodeDBconnection')


exports.addCxMovimento = (req, res, next) => {
  const registro = req.body

  CxMovimento.create(registro)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updCxMovimento = (req, res, next) => {
  const id = req.body.id
  const body = req.body

  console.log(id)
  console.log(body)
  CxMovimento.findByPk(id)
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

exports.delCxMovimento = (req, res, next) => {
  const id = req.params.id

  CxMovimento.findByPk(id)
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

}

exports.getCxMovimentoById = (req, res, next) => {
  const id = req.params.id
  CxMovimento.findByPk(id)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
}

exports.getCxMovimentoByEmpreendimento = (req, res, next) => {
  const id = req.params.id
  CxMovimento.findAll({
    where: { id_empreendimento: id },
    order: [['data', 'ASC']]
  })
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
}

exports.getCxMovimentoByCentroCustos = (req, res, next) => {
  const id = req.params.id
  CxMovimento.findAll({
    where: { id_centrocustos: id },
    order: [['data', 'ASC']],

  })
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
}

exports.getCxMovimentoByDescricao = (req, res, next) => {
  const { descricao } = req.params
  const busca = `%${descricao.toLowerCase()}%`
  console.log(busca)


  CxMovimento.sequelize.query(`select *
  from cx_movimento where LOWER(descricao) like ?
  order by descricao`,
    { replacements: [busca] })
    .then(registro => {
      res.status(200).json(registro[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}




exports.getCxMovimento = (req, res, next) => {
  CxMovimento.sequelize.query(`
  select *
  from cx_movimento
  order by data`)
    .then(registros => {
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}

exports.getCxMovimentoQuery = (req, res, next) => {
  const dataanterior = req.body.dataanterior
  const query = req.body.query
  CxMovimento.sequelize.query(query)

    .then(registros => {
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}

exports.getCxMovimentoSaldo = (req, res, next) => {
  const id_centrocustos = req.body.id_centrocustos
  const dataanterior = req.body.dataanterior
  const query = `
  select SUM( 
    (SELECT COALESCE(sum(valor), 0) FROM cx_movimento where data < ${dataanterior} and sinal = "+" and id_centrocustos = ${id_centrocustos}) -
    (SELECT COALESCE(sum(valor), 0) FROM cx_movimento where data < ${dataanterior} and sinal = "-" and id_centrocustos = ${id_centrocustos})
    ) as saldoanterior
  `

  CxMovimento.sequelize.query(query)

    .then(registros => {
      console.log(registros[0])
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}







