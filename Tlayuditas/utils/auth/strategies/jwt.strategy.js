const {Strategy,ExtractJwt} = require('passport-jwt')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'olkV9tRLfFmybhJnYIZE7esQd1Sv0cwH'
}

const JwtStrategy = new Strategy(options,(payload,done)=>{
  return done (null, payload)
})

module.exports =JwtStrategy
