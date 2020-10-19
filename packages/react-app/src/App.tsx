import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Center, Connect, Explore, NftCreate, NftDetail } from './pages'

import { Header } from './components/header'
import ThemeProvider from './theme'
import { ModalProvider } from './context'
import { UseWalletProvider } from 'use-wallet'

const Providers: React.FC = ({children}) => {
  return (
    <ThemeProvider>
      <UseWalletProvider 
        chainId={1} 
        connectors={{
          walletconnect: {
            rpcUrl: ""
          },
          fortmatic: {
            apiKey: ""
          }
        }}
      >
        <ModalProvider>{children}</ModalProvider>
      </UseWalletProvider>
    </ThemeProvider>
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
