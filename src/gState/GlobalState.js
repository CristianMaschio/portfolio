import React, { Component } from "react"
import PropTypes from "prop-types"
import AppState from "./context"

export default class GlobalState extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  state = {
    headerClass: "",
    language: "En"
  }

  setRenderInformation = (value = true) => {
    this.setState({
      headerClass: value ? "open-header" : ""
    })
  }

  changeLanguage = (value = "En") => {
    this.setState({ language: value })
  }

  render() {
    const { headerClass, language } = this.state
    return (
      <AppState.Provider
        value={{
          setRenderInformation: this.setRenderInformation,
          headerClass,
          language,
          changeLanguage: this.changeLanguage
        }}
      >
        {this.props.children}
      </AppState.Provider>
    )
  }
}
