import React, { Component } from "react"
import "./App.css"
import Home from "./pages/Home"
import Header from "./pages/_shared/Header"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
      </div>
    )
  }
}

export default App
