const express = require('express')
const router = express.Router()
const Pedidos = require('../models/pedidos')

router.get('/',  (req, res) =>{
    try{
         res.json({
             name: 'Niza',
             lastName: 'Alavat'
        })
    } catch(error){
        console.log(`Error: ${error}`)
    }
})

module.exports = router
