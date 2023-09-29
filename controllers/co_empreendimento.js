const Empreendimento = require('../models/mo_empreendimento')
const jwt = require('../util/jwt')
const sequelize = require('../util/apinodeDBconnection')


exports.addEmpreendimento = (req, res, next) => {
  const registro = req.body
  console.log('Empreendimento')
  console.log(registro)
  Empreendimento.create(registro)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updEmpreendimento = (req, res, next) => {
  const id = req.body.id
  const body = req.body
  console.log(id)
  console.log(body)
  Empreendimento.findByPk(id)
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

exports.delEmpreendimento = (req, res, next) => {
  const id = req.params.id

  Empreendimento.findByPk(id)
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

exports.getEmpreendimentoById = (req, res, next) => {
  const id = req.params.id
  Empreendimento.findByPk(id)
    .then(registro => {
      res.status(200).json(registro)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Registro não encontrado.')
    })
}

exports.getEmpreendimentoByNome = (req, res, next) => {
  const { nome } = req.params
  const busca = `%${nome.toLowerCase()}%`
  console.log(busca)


  Empreendimento.sequelize.query(`select *
  from empreendimentos where LOWER(nome) like ?
  order by nome`,
    { replacements: [busca] })
    .then(registro => {
      res.status(200).json(registro[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}




exports.getEmpreendimentos = (req, res, next) => {
  Empreendimento.sequelize.query(`
  select *
  from empreendimentos
  order by nome`)
    .then(registros => {
      res.status(200).json(registros[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}






