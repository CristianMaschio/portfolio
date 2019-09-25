import React, { Component } from "react"
import PropTypes from "prop-types"
import AppState from "./context"

export default class GlobalState extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  state = {
    headerClass: ""
  }

  setRenderInformation = (value = true) => {
    if (value) {
      document.body.classList.add("noScroll")
      this.setState({ headerClass: "open-header" })
    } else {
      document.body.classList.remove("noScroll")
      this.setState({ headerClass: "" })
    }
  }

  render() {
    const { headerClass } = this.state
    return (
      <AppState.Provider
        value={{
          setRenderInformation: this.setRenderInformation,
          headerClass,
        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}
