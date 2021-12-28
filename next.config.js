const fs = require('fs');
module.exports = {
  reactStrictMode: true,
  env: {
    rawJsFromFile: fs.readFileSync('jss/script.js').toString(),
  },
};
