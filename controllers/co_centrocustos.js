const CentroCustos = require('../models/mo_centrocustos')
const jwt = require('../util/jwt')
const sequelize = require('../util/apinodeDBconnection')


exports.addCentroCustos = (req, res, next) => {
  const registro = req.body
  console.log('CentroCustos')
  console.log(registro)
  CentroCustos.create(registro)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updCentroCustos = (req, res, next) => {
  const id = req.body.id
  const body = req.body
  console.log(id)
  console.log(body)
  CentroCustos.findByPk(id)
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

exports.delCentroCustos = (req, res, next) => {
  const id = req.params.id

  CentroCustos.findByPk(id)
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

exports.getCentroCustosById = (req, res, next) => {
  const id = req.params.id
  CentroCustos.findByPk(id)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
}

exports.getCentroCustosByDescricao = (req, res, next) => {
  const { descricao } = req.params
  const busca = `%${descricao.toLowerCase()}%`
  console.log(busca)


  CentroCustos.sequelize.query(`select *
  from centro_custos where LOWER(descricao) like ?
  order by descricao`,
    { replacements: [busca] })
    .then(registro => {
      res.status(200).json(registro[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}




exports.getCentroCustos = (req, res, next) => {
  CentroCustos.sequelize.query(`
  select *
  from centro_custos
  order by descricao`)
    .then(registros => {
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}






