const routerApi = require('./routers')
const express = require('express')
const app = express()
const port =3000

app.get('/', (req, res) =>{
   res.send('Bienvenidos a Tlayuditas Daniz js')
 })

 app.get('/otra-ruta', (req, res) =>{
  res.send('Espero que sean de tu agrado')
})

app.get('/clientes', (req, res) =>{
  res.send('what are you doing?')
})

routerApi(app)

app.listen(port, ()  => {
console.log(`listening at http://localhost:${port}`)
})
