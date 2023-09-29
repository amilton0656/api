const express = require('express')

const controller = require('../controllers/co_empreendimento')

const router = express.Router()

const md_auth = require('../util/autenticacao')

router.post('', controller.addEmpreendimento)
router.patch('', controller.updEmpreendimento)
router.delete('/:id', controller.delEmpreendimento)
router.get('', controller.getEmpreendimentos)
router.get('/id/:id', controller.getEmpreendimentoById)
router.get('/nome/:nome', controller.getEmpreendimentoByNome)

module.exports = router