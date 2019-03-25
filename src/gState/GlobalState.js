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
    this.setState({
      headerClass: value ? "open-header" : ""
    })
  }

  render() {
    const { headerClass } = this.state
    return (
      <AppState.Provider
        value={{
          setRenderInformation: this.setRenderInformation,
          headerClass
        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}
