const express = require('express')
const router = express.Router()
const passport = require('passport')
const menu = require('../models/menu')

router.get('/',
passport.authenticate('jwt', {session:false}),
(req, res) =>{
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
