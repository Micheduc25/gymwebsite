module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [

                    'vue-svg-loader',
                    'babel-loader',
                ],
            },
        ],
    },
}