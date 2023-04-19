const path = require('path');
// npx webpack --env target=prod
module.exports = env => {
    console.log("Compiling for development....");
    return {
      mode: "development",
      entry: {
        index              : "./src/js/index.js",
        },

      output: {
        path     : "/npm/dist/js/",
        filename : "[name].react.bundle.js"
      },
      devtool: 'inline-source-map',
      module : {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: [path.resolve(__dirname, "node_modules")],
            use: {
                  loader: 'babel-loader?optional=runtime&cacheDirectory=true',
                  options: {
                            presets: [
                                      '@babel/preset-env',
                                      '@babel/preset-react'
                                      ]
                            },
          },
        },
          {test: /\.css$/, use: 'css-loader'},
          {
          test: /\.(png|gif|woff|woff2|eot|ttf)$/,
          use: {
            loader: "url-loader?limit=100000",
          }
        },
          {test: /\.svg$/, use: 'svg-loader'},
       ] // end rules
      } // end module
    } // end return
} // end function
