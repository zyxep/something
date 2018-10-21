let express = require('express')
let logger = require('morgan')
let cookieSession = require('cookie-session')
let passport = require('passport'),
  LdapStrategy = require('passport-ldapauth')

/*
  Routes
 */
let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')

/*
  LDAP Config
 */
let OPTS = {
  server: {
    url: '',
    bindDN: '',
    bindCredentials: '',
    searchBase: '',
    searchFilter: ''
  }
}

let app = express()

app.use(new LdapStrategy(OPTS))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
)
app.use(passport.initialize())

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app
