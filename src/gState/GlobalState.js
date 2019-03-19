import React, { Component } from "react"
import PropTypes from "prop-types"
import AppState from "./context"

export default class GlobalState extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  state = {
    isRenderInformation: false
  }

  setRenderInformation = (value = true) => {
    this.setState({ isRenderInformation: value })
  }

  render() {
    const { isRenderInformation } = this.state
    return (
      <AppState.Provider
        value={{
          isRenderInformation,
          setRenderInformation: this.setRenderInformation
        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}
