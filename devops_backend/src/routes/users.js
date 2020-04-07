const express = require('express')
const users = require('../controllers/users')

usersRouter = express.Router()

usersRouter
  .post('/', (req, res, next) => {
    const user = {
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      team: req.body.team
    }
    users.create(user, (err, result) => {
      if (err) return res.status(400).json({ 
        error: {
          message: err.message,
        }
      });
      res.status(201).json({ username: result });
    })
  })
  .get('/:username', (req, res, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    const username = req.params.username;
    users.get(username, (err, result) => {
      if (err) return res.status(400).json({ 
        error: {
          message: err.message,
        }
      });
      res.status(200).json({
        username: result.username,
        firstname: result.firstname,
        lastname: result.lastname,
        team: result.team
      })
    })
  })
  .delete('/:username', (req, res, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
    const username = req.params.username;
    users.delete(username, (err, result) => {
      if (err) return res.status(400).json({ 
        error: {
          message: err.message,
        }
      });
      res.status(204).json({message: "User deleted successfully"});
    })
  })

module.exports = usersRouter;