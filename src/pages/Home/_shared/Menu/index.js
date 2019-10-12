import React, { PureComponent } from "react"
import whiteInfo from "../../../../assets/images/whiteInfo.png"

import AppState from "../../../../gState/context"

export class Menu extends PureComponent {
  render() {
    const { setRenderInformation } = this.props.context
    const menuLink = require(`../../../../assets/languages/En-content.json`)
      .menu
    return (
      <div className="menu">
        <img
          onClick={setRenderInformation}
          src={whiteInfo}
          alt="info click icon"
          className="info-menu"
        />
        <p onClick={setRenderInformation}>Cristian Maschio</p>
        <ul>
          <li>
            <a href="#professional">{menuLink.professional} </a>
          </li>
          <li>
            <a href="#education">{menuLink.education}</a>
          </li>
          <li>
            <a href="#passions">{menuLink.passions}</a>
          </li>
          <li>
            <a href="#personal-experiences">{menuLink.experiences}</a>
          </li>
          <li>
            <a href="#code">{menuLink.code}</a>
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
