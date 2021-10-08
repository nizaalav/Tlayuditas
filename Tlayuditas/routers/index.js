const encargadoRouters = require('./encargado')
//const devolucionesRouters = require('./devoluciones')
//const clientesRouters = require('./clientes')

function routerApi(app){
  app.use('/encargado', encargadoRouters)
}

module.exports = routerApi
