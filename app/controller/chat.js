module.exports.loadChat = function(application,req,res){

  const dadosForm = req.body
  req.assert('nickname', 'É necessário informar o nome do usuário').notEmpty()
  req.assert('nickname', 'O nome do usuário deve possuir entre 3 e 10 caracteres').len(3,10)

  const erros = req.validationErrors()

  const notificationData = {
    nickname: dadosForm.nickname,
    mensagem: ' acabou de entrar no chat'
  }
  
  application.get('io').emit('userNotification', notificationData)

  if(erros){
    console.log(erros)
    res.render('index', {erros})
    return
  }

  res.render('chat')
}