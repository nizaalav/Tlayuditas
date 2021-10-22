const { Strategy } = require ('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy = new  Strategy(
  async(email, password, done) => {
     try{
      const usersTest = [
       {name: 'Dara ', email: 'user1@mail.com',  password: '$2b$10$vTQYiu2tA84Kd9uMYkm6He3NkPuG2HOHg9m60GY10pfdckRHq4B6q', rol: 'user' },
       {name: 'Niza ', email: 'admin@mail.com',  password: '$2b$10$vTQYiu2tA84Kd9uMYkm6He3NkPuG2HOHg9m60GY10pfdckRHq4B6q', rol: 'admin' },
       {name: 'Israel',email: 'user2@mail.com',  password: '$2b$10$vTQYiu2tA84Kd9uMYkm6He3NkPuG2HOHg9m60GY10pfdckRHq4B6q', rol: 'user' },
      ]
     const user = usersTest[1]
     if(!user) return done(null, null)
     console.log(user)
     const isMatch = await bcrypt.compare(password, user.password)
     if(!isMatch) throw { status: 401, menssage: 'No autorizado', error: true}
     delete user.password
     done(null, user)
    } catch(error){
     done(error,false)
    }
  }
)
module.exports =LocalStrategy
