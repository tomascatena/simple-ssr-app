import path from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
  mode: 'development',

  // Inform webpack that we're building a bundle for
  // NodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.ts',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 4000,
  },
}

export default config
