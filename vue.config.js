const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    entry: ['babel-polyfill', './src/main.js'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['ie 11']
                    },
                    useBuiltIns: 'entry',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        }
      ],
    },
    plugins: [
    ],
  },

})
