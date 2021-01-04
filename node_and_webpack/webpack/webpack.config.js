var path = require('path');
module.exports = {
    mode:"production",
    entry:  './src',
    output: {
        path: path.join(__dirname, "builds"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    // { loader: 'sass-loader' }
                ]
            }
        ]
    },

    devServer: {
        host: '0.0.0.0',
        port: 3000
    }
};