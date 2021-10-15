const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')

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

