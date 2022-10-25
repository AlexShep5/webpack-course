const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false
                            }
                        }
                    }
                ]

            },
            {
                test: /\.mp[34]$/i,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
