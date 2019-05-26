import React, { PureComponent } from "react"
import "./styles/global.scss"
import "./fonts/roboto/roboto.css"
import Home from "./scenes/Home"
import Header from "./scenes/_shared/Header"
import Footer from "./scenes/_shared/Footer"
import GlobalState from "./gState/GlobalState"

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
