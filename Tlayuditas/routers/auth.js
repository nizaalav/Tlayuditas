const express = require ('express')
const passport = require ('../utils/auth')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/login',
passport.authenticate ('local',{session:false}),
async (req, res, next)=>{
   try{
     const user = req.user
     const payload = {
       sub: user.id,
       role: user.rol
      }
      const token = jwt.sign(payload, 'olkV9tRLfFmybhJnYIZE7esQd1Sv0cwH')
      res.json({
        user,
        token
      })
      //res.json(req.user)
    } catch (error){
      next (error)
    }
}
)

  module.exports = router

