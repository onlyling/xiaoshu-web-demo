import { Provider } from '@fruits-chain/react-native-xiaoshu'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Router from './router'

import './global.css'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider>
        <Router />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
