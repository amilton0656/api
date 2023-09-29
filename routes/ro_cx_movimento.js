const express = require('express')

const controller = require('../controllers/co_cx_movimento')

const router = express.Router()

const md_auth = require('../util/autenticacao')

router.post('', controller.addCxMovimento)
router.patch('', controller.updCxMovimento)
router.delete('/:id', controller.delCxMovimento)
router.get('', controller.getCxMovimento)
router.get('/id/:id', controller.getCxMovimentoById)
router.get('/desc/:descricao', controller.getCxMovimentoByDescricao)
router.get('/obra/:id', controller.getCxMovimentoByEmpreendimento)
router.get('/cc/:id', controller.getCxMovimentoByCentroCustos)
router.get('/query/:query', controller.getCxMovimentoByCentroCustos)

module.exports = router