import React, { Component } from "react"
import "./styles/spinner.css"
import "./styles/global.scss"
import "./fonts/roboto/roboto.css"
import Home from "./pages/Home"
import Header from "./pages/_shared/Header"
import Footer from "./pages/_shared/Footer"
import GlobalState from "./gState/GlobalState"

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return (
        <div className="app-spinner">
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        </div>
      )
    } else {
      return (
        <GlobalState>
          <Header />
          <Home />
          <Footer />
        </GlobalState>
      )
    }
  }
}

export default App
