import React, { Component } from "react"
import "./styles/global.scss"
import Home from "./pages/Home"
import Header from "./_shared/Header"
import Footer from "./_shared/Footer"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  }
}

export default App
