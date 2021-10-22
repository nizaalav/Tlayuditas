const routerApi = require('./routers')
const express = require('express')
const app = express()
const { config } =require('./config/index')
const { checkApikey } = require('./middleware/auth.handler')
const passport = require('passport')

app.use(passport.initialize)
const port = config.port

const mongoose = require ('mongoose')
const USER =  encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = encodeURIComponent(config.dbName)
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

console.log('****************')
console.log(MONGO_URI)
mongoose.connect(MONGO_URI,
  {useNewUrlParser:true, useUnifiedTopology: true}
  ).then(() => console.log('Ya estamos  conectados.yujuuu!')).catch(e=>console.log(e))


require('./utils/auth')

  app.get('/', (req, res) =>{
   res.send('Bienvenidos a Tlayuditas Daniz js')
 })

 app.get('/otra-ruta', checkApikey, (req, res) =>{
  res.send('Espero que sean de tu agrado')
})

app.get('/clientes', (req, res) =>{
  res.send('puede levantar mi pedido?')
})

routerApi(app)

app.listen(port, ()  => {
console.log(`listening at http://localhost:${port}`)
})
