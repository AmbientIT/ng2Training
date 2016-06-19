'use strict'

const mockPath = '../../mockData/user.json'
const fs = require('fs-promise')

module.exports = (server) => {
  server.get('/isAvailable/:email', (req, res) => {
    fs.readJson(mockPath)
      .then(users => {
        users.find(user => user.email === req.params.email)
          ? res.status(400).json({
            message: 'email is not availlable',
          })
          : res.send()
      })
  })
}
