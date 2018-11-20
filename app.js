const app = require('./config/server')
const websocket = require('socket.io')

const port = 3000

const appHTTP = app.listen(port, function(){
  console.log(`Application running on port ${port}`)
})

const io = websocket.listen(appHTTP)

app.set('io',io)

io.on('connection', function(socket){
  console.log('Usuário conectou')

  socket.on('disconnect',function(){
    console.log('Usuário desconectou')
  })
})