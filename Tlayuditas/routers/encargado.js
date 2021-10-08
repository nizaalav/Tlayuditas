const express = require('express')

const router = express.Router()

router.get('/',  (req, res) => {
  res.json([
  {
    name:'Encargado 1',
    mobile: 9712657084
  },
  {
    name: 'Encargado 2',
    mobile: 9212227094
    }
  ])
})

router.get('/encargado/filter ', (req, res) => {
  res.json(
    {
      name: 'producto A',
      price: 1000
    })
  })

module.exports = router
