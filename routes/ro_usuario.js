const express = require('express')

const controller = require('../controllers/co_usuario')

const router = express.Router()

router.get('/form', (req, res) => {
    res.render('formPostagem.ejs')
})


router.post('/add', controller.addUsuario)
router.get('/lista', controller.getUsuarios)
router.delete('/delete/:id', controller.delUsuario)

module.exports = router