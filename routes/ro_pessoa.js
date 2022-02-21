const express = require('express')

const controller = require('../controllers/co_pessoa')

const router = express.Router()

const md_auth = require('../util/autenticacao')

router.post('/add', controller.addPessoa)
router.put('/upd', controller.updPessoa)
router.delete('/del/:id', controller.delPessoa)
router.get('/lista', controller.getPessoas)
router.post('/login', controller.login)

module.exports = router