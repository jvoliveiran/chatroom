module.exports = function(application){
  application.post('/chat', function(req,res){
    application.app.controller.chat.loadChat(application,req,res)
  })

  application.get('/chat', function(req,res){
    application.app.controller.chat.loadChat(application,req,res)
  })
}