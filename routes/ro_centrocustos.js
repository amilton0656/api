const express = require('express')

const controller = require('../controllers/co_centrocustos')

const router = express.Router()

const md_auth = require('../util/autenticacao')

router.post('', controller.addCentroCustos)
router.patch('', controller.updCentroCustos)
router.delete('/:id', controller.delCentroCustos)
router.get('', controller.getCentroCustos)
router.get('/id/:id', controller.getCentroCustosById)
router.get('/desc/:descricao', controller.getCentroCustosByDescricao)

module.exports = router