function checkApikey (req, res, next){
try{
  const apiKey = req.headers['api']
 if(apiKey == '75321') next()
 else throw { status: 401, message: 'No autorizado, bye', error: true}
} catch(error){
  return res.status(error.status || 500).send({message: error.message})
 }
}
module.exports = { checkApikey }
