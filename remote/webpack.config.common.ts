import { Configuration, ProvidePlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ConfigWebpackPlugin from './scripts/ConfigWebpackPlugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced';

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    publicPath: 'auto',
    uniqueName: 'app2'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx|mjs)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new ProvidePlugin({
      React: 'react'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
    new DotenvWebpackPlugin({
      defaults: true,
      allowEmptyValues: true,
      safe: true
    }),
    new ProgressBarPlugin() as WebpackPluginInstance,
    new ConfigWebpackPlugin({
      input: './src/config.ts',
      outputFileName: 'config.js'
    }),
    new ModuleFederationPlugin({
      name: 'remote',
      manifest: true,
      filename: `remoteEntry.js?v=${Date.now()}`,
      exposes: {
        './Counter': './src/components/Counter.tsx',
        './Info': './src/info.ts',
        './Router': './src/components/Router.tsx'
      },
      shared: undefined
    })
  ]
};

export default config;
