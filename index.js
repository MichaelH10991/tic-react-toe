var express = require('express')
var app = express()
var route = '/express_backend'
const PORT  = 8080

app.get(route, function(req, res){

   res.send('hello world')

})

app.listen(PORT, () => console.log('server listening on port '+ PORT + ' @ ' + route))
