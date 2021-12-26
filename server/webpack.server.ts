import path from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base'

const config: Configuration = {
  // Inform webpack that we're building a bundle for
  // NodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/server.ts',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
}

export default merge(baseConfig, config)
