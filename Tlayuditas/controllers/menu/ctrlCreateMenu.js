const { createmenu } = require("../../services/menu/createmenu")

async function ctrlCreatemenu(req, res){
try{
     const { name, fecha, precio, email } = req.body
     const productos = await createmenu({name, fecha, precio, email})
     return res.status(200).send(productos)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlCreatemenu }
