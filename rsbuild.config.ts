import path from 'node:path'

import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  dev: {
    writeToDisk: false,
  },
  source: {
    entry: {
      index: './src/index.tsx',
    },
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-native$': path.join(__dirname, 'patch/react-native.js'),
      'react-native-svg$': path.join(__dirname, 'patch/react-native-svg.js'),
      'react-native-safe-area-context':
        'expo-dev-menu/vendored/react-native-safe-area-context/src',
    },
  },
  output: {
    assetPrefix: './',
    dataUriLimit: {
      image: 5000,
      media: 0,
    },
  },
  html: {
    template: './index.html',
    templateParameters: {
      title: 'Xiaoshu Web Demo',
    },
  },
  plugins: [
    pluginReact(),
    pluginBabel({
      babelLoaderOptions: (_config, { addPlugins }) => {
        addPlugins(['react-native-web'])
      },
    }),
  ],
})
