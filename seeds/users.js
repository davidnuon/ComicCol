const { User } = require('../models')

const users = [
  {
    username: 'professorx',
    email: 'profx@email.com',
    password: 'password1234',
    hash: 'hash1234',
    salt: 'salt1234'
  },
  {
    username: 'cyclops',
    email: 'ole1eye@email.com',
    password: 'password5678',
    hash: 'hash1234',
    salt: 'salt1234'
  },
  {
    username: 'iceman',
    email: 'coolkid@email.com',
    password: 'password9012',
    hash: 'hash1234',
    salt: 'salt1234'
  }
]

const seedUsers = () => User.bulkCreate(users)

module.exports = seedUsers
