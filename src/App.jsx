import React, { PureComponent } from 'react'
import './assets/styles/main.scss'
import './assets/fonts/roboto/roboto.css'
import Home from './pages/Home'
import Header from './pages/_shared/Header'
import Footer from './pages/_shared/Footer'
import GlobalState from './gState/GlobalState.js'

class App extends PureComponent {
  render() {
    return (
      <GlobalState>
        <Header />
        <Home />
        <Footer />
      </GlobalState>
    )
  }
}

export default App

