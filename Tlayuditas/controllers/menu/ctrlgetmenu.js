const { getmenu } = require("../../services/menu/getmenu")

async function ctrlGetmenu(req, res){
try{
     const { _id } = req.params
     const menu = await getmenu(_id)
     return res.status(200).send(menu)
}    catch (error){
     return res.status(error.status || 500 ).send({message: error.message})
}
//console.log('lo que solicitaste es', precio)
//return res.status(200).send({precio: precio == '1'? 'costo':'ropa'})
}

module.exports = { ctrlGetmenu}
