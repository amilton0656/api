const express = require('express')

const controller = require('../controllers/co_usuario')

const router = express.Router()

router.get('/form', (req, res) => {
    res.render('formPostagem.ejs')
})


router.post('/add', controller.addUsuario)
router.put('/upd', controller.updUsuario)
router.delete('/del/:id', controller.delUsuario)
router.get('/lista', controller.getUsuarios)

module.exports = router