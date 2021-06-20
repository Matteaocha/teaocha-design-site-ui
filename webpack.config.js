const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = {
  ASSET_PATH: process.env.ASSET_PATH || '/',
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '8080',
}

let plugins = [
  new webpack.DefinePlugin({
    'process.env.ASSET_PATH': JSON.stringify(env.ASSET_PATH),
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html' ,
  }),
]

if (env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new CompressionPlugin()
  ]
}

//--------------------------------------------------------------------------------

module.exports = {
  entry: './apps/ui-shell/src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  mode: env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
          // Enables auto-prexing etc
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name(resourcePath, resourceQuery) {
              // `resourcePath` - `/absolute/path/to/file.js`
              // `resourceQuery` - `?foo=bar`

              if (env.NODE_ENV === 'development') {
                return '[path][name].[ext]'
              }

              return '[path][name]_[contenthash].[ext]'
            },
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins,
  devServer: {
    contentBase: './dist',
    port: env.port,
    host: '0.0.0.0',
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: env.ASSET_PATH,
  },
}