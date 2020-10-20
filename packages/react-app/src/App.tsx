import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Center, Connect, Explore, NftCreate, NftDetail } from './pages'

import { Header } from './components/header'
import ThemeProvider from './theme'
import { ModalProvider } from './context'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { NETWORK_CONTEXT } from './constants'
import { Provider } from 'react-redux'
import { getLibrary } from './utils'
import store from './state'

const Web3ProviderNetwork = createWeb3ReactRoot(NETWORK_CONTEXT)

const Providers: React.FC = ({children}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary} >
      <Web3ProviderNetwork getLibrary={getLibrary} >
        <Provider store={store} >
          <ThemeProvider>
              <ModalProvider>{children}</ModalProvider>
            </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

function App() {
  return (
    <Providers>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Explore} />
          <Route path="/center" component={Center} /> 
          <Route path="/connect" component={Connect} />
          <Route path="/nft" component={NftDetail} />
          <Route path="/create" component={NftCreate} />
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
