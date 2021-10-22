const menuRouters = require('./menu')
const usuarioRouters = require('./usuario')
const ventasRouters = require('./ventas')
const pedidosRouters = require('./pedidos')
const { checkApiKey } = require('./middleware/auth.handler')

function routerApi(app){
  app.use('/menu', menuRouters)
  app.use('/usuario', usuarioRouters )
  app.use('/ventas', ventasRouters)
  app.use('/pedidos', pedidosRouters)
}


module.exports = routerApi
