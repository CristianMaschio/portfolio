import React, { Component } from "react"
import "./styles/global.scss"
import Home from "./pages/Home"
import Header from "./pages/_shared/Header"
import Footer from "./pages/_shared/Footer"
import GlobalState from "./gState/GlobalState"

class App extends Component {
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
