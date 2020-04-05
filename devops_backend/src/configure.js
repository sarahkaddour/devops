const path = require('path')
const mixme = require('mixme')
const fs = require('fs')
config_default = require('../conf/default')

module.exports = (config_user = {}) => {
  config = mixme.merge(config_default, config_user)
  if (config.users.db_dir)
    config.users.db_dir = path.join(__dirname, '..', config.users.db_dir)

  // Create directory if not exists
  if (!fs.existsSync(config.users.db_dir))
    fs.mkdirSync(config.users.db_dir)

  return config
}
