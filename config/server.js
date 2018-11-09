const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.set('view engine','ejs')
app.set('views', './app/view')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
  .include('app/route')
  .then('app/model')
  .then('app/controller')
  .into(app)

module.exports = app
