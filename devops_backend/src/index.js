const express = require('express')
const bodyparser = require('body-parser')
const usersRouter = require('./routes/users')
const mongoose = require('mongoose');
const User = require ('./models/User');
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://localhost:27017/devops', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('open', (err) => {
  if (err) throw err;
  console.log('Connected to mongodb server.');
})
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  //TODO
  User.find({}, function(err, users) {
    var userMap = [];
    users.forEach(function(user) {
      userMap.push({
        id: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        team: user.team
      });
    });
    res.send(userMap);
  });
})
app.use('/user', usersRouter)

module.exports = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
