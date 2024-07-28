import path from 'node:path'

import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
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
      BASE_URL: './',
    },
  },
  // performance: {
  //   chunkSplit: {
  //     strategy: 'split-by-experience',
  //   },
  // },
  plugins: [
    pluginReact(),
    pluginBabel({
      babelLoaderOptions: (_, { addPlugins }) => {
        addPlugins(['react-native-web'])
      },
    }),
  ],
})
