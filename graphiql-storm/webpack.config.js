const path = require('path');

module.exports = {
  mode:process.env.NODE_ENV || 'development',
  entry: path.join(__dirname,'./index.js'),
  output: {
    path: path.join(__dirname, './'),
    filename:'bundle.index.js'
  },
};
