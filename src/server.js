const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.midlewares()
    this.views()
    this.routes()
  }

  midlewares () {
    this.express.use(express.urlencoded({ extended: false }))
  }

  view () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.set('view engine', 'njk')
  }

  routes () {

  }
}

module.exports = new App().express
