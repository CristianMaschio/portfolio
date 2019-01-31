import React, { Component } from "react"
import "./styles/global.scss"
import Home from "./pages/Home"
import Header from "./_shared/Header"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    )
  }
}

export default App
