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
    if (value) {
      document.body.classList.add("noScroll")
      this.setState({ headerClass: "open-header" })
    } else {
      document.body.classList.remove("noScroll")
      this.setState({ headerClass: "" })
    }
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
