const path = require('path');
const express = require('express')
const app = express()
var cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())

const sequelize = require('./util/apinodeDBconnection')
sequelize.authenticate()
    .then(() => {
        require('./models')
        sequelize.sync()

        console.log('Conectado!')
    })
    .catch(err => console.log('Erro ao Conectar!'))

const usuarioRoutes = require('./routes/ro_usuario');
app.use('/usuario', usuarioRoutes);

const pessoaRoutes = require('./routes/ro_pessoa');
app.use('/pessoa', pessoaRoutes);

const pessoacomplementoRoutes = require('./routes/ro_pessoa_complemento');
app.use('/pessoacomplemento', pessoacomplementoRoutes);

const pessoacontatoRoutes = require('./routes/ro_pessoa_contato');
app.use('/pessoacontato', pessoacontatoRoutes);

const mkthistoricoRoutes = require('./routes/ro_mkt_historico');
app.use('/mkthistorico', mkthistoricoRoutes);

const mktitemRoutes = require('./routes/ro_mkt_item');
app.use('/mktitem', mktitemRoutes);

const empreendimentoRoutes = require('./routes/ro_empreendimento');
app.use('/empreendimento', empreendimentoRoutes);

const centrocustosRoutes = require('./routes/ro_centrocustos');
app.use('/centrocustos', centrocustosRoutes);

const cxmovimentoRoutes = require('./routes/ro_cx_movimento');
app.use('/cxmovimento', cxmovimentoRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/status.html')
})

app.listen(21276)