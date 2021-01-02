var path = require('path');
module.exports = {
    entry:  './src',
    output: {
        path: path.join(__dirname, "builds"),
        filename: 'bundle.js',
    },
};