import "./Header.scss"
import React, { PureComponent } from "react"
import Icon from "antd/lib/icon"

import ImageProfile from "../ImageProfile"

import AppState from "../../../gState/context"

const personalData = [
  { key: "Name", text: "Cristian" },
  { key: "Surname", text: "Maschio" },
  { key: "Birthday", text: "05/31/1994" },
  { key: "Nationality", text: "Italy" }
]

export class Header extends PureComponent {
  renderContent = contents => {
    return (
      <div>
        {contents.map(content => {
          return (
            <div key={content.key} className="menuContent">
              <div className="line" />
              <div className="menuContentContainer">
                <p>{content.key}:</p>
                <p>{content.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { setRenderInformation, headerClass } = this.props.context
    return (
      <header className={headerClass}>
        <div onClick={() => setRenderInformation(false)} className="close" />
        <div className="header-blue" />
        <div className="header-information">
          <ImageProfile size={200} />
          <div className="menuContainer">
            <div className="line" />
            <h2>Personal</h2>
            {this.renderContent(personalData)}
          </div>
          <div className="menuContainer">
            <div className="line" />
            <h2>Contacts</h2>
            <div className="menuContent">
              <div className="line" />
              <div className="menuContentContainer">
                <a
                  href="tel:345-273-6368"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="phone" />
                </a>
                <a
                  href="mailto:cristianmaschio@hotmail.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="mail" />
                </a>
                <a
                  href="https://github.com/CristianMaschio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cristian-maschio-37004a146"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="eu-regolation">
            I authorize the processing of my personal data pursuant to
            Legislative Decree 196/03 and the General Data Protection Regulation
            (EU / 2016/679).
          </div>
        </div>
      </header>
    )
  }
}

export default class HeaderConsumer extends PureComponent {
  render() {
    return (
      <AppState.Consumer>
        {state => <Header context={state} />}
      </AppState.Consumer>
    )
  }
}
