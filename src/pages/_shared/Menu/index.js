import React, { PureComponent } from "react"
import "./Menu.scss"
import whiteInfo from "./whiteInfo.png"

import AppState from "../../../gState/context"

export class Menu extends PureComponent {
  render() {
    const { setRenderInformation } = this.props.context
    return (
      <div className="menu">
        <img
          onClick={setRenderInformation}
          src={whiteInfo}
          className="info-menu"
        />
        <p onClick={setRenderInformation}>Cristian Maschio</p>
        <ul>
          <li>
            <a href="#professional">Professional</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#passions">Passions</a>
          </li>
          <li>
            <a href="#personal-experiences">Personal experiences</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default class MenuConsumer extends PureComponent {
  render() {
    return (
      <AppState.Consumer>{state => <Menu context={state} />}</AppState.Consumer>
    )
  }
}
