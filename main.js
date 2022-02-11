const path = require('path');
const express = require('express')
const app = express()
var cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())

const sequelize = require('./util/DBconnection')
sequelize.authenticate()
    .then(() => {
        require('./models')
        sequelize.sync() 
        
        console.log('Conectado!')
    })
    .catch(err => console.log('Erro ao Conectar!'))
    
const usuarioRoutes = require('./routes/ro_usuario');
app.use('/usuario', usuarioRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/status.html')
})

app.listen(21276)