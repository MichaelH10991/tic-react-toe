var express = require('express')
var app = express()
var route = '/express_backend'
const PORT = process.env.PORT || 8080

app.get(route, function(req, res){

   res.send({ express: 'EXPRESS BACKEND IS CONNECTED TO REACT...' })

})

app.listen(PORT, () => console.log('server listening on port '+ PORT + ' @ ' + route))
