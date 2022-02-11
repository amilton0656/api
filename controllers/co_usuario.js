const Usuario = require('../models/mo_usuario')

exports.addUsuario = (req, res, next) => {
  const usuario = req.body
  Usuario.create(usuario)
    .then(usuario => {
      res.status(200).json(usuario)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao cadastrar.')
    })
}

exports.updUsuario = (req, res, next) => {
  const id = req.params.id
  const body = req.body

  Usuario.findByPk(id)
    .then(usuario => {
      usuario.update(body)
    })
    .then(usuario => {
      res.status(200).json(body)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Erro ao atualizar.')
    })
}

exports.delUsuario = (req, res, next) => {
  const id = req.params.id

  Usuario.findByPk(id)
    .then(usuario => {
      usuario.destroy(usuario)
    })
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getUsuarioById = (req, res, next) => {
  const id = req.params.id
  Usuario.findByPk(id)
    .then(usuario => {
      res.status(200).json(usuario)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Usuário não encontrado.')
    })
}

exports.getUsuarioByNome = (req, res, next) => {
  const { nome } = req.params
  const busca = '%' + nome.toLowerCase() + '%'

  Usuario.sequelize.query(`select id, nome
  from usuarios
  where lower(nome) like :busca
  order by nome`,
  { replacements: { busca } })
    .then(usuario => {
      res.status(200).json(usuario[0])
    })
    .catch(err => {
      res.status(500).send({ message: "Ocorreu um erro ao buscar os registros." });
    });
}


exports.getUsuarios = (req, res, next) => {
  Usuario.sequelize.query(`
  select id, nome
  from usuarios
  order by nome`)
    .then(usuarios => {
      res.status(200).json(usuarios[0])
    })
    .catch(err => {
      console.log(err)
      res.status(500).json('Ocorreu um erro ao buscar os registros.')
    })
}




