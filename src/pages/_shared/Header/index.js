import "./Header.css"
import React, { Component } from "react"
import Icon from "antd/lib/icon"

import imageProfile from "./imageProfile.jpg"

const personalData = [
  { key: "Name", text: "Cristian" },
  { key: "Surname", text: "Maschio" },
  { key: "Birthday", text: "05/31/1994" },
  { key: "Nationality", text: "Italy" }
]

export default class Header extends Component {
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
    return (
      <header>
        <div className="header-blue" />
        <div className="header-information">
          <div className="image-container">
            <img className="image-profile" src={imageProfile} />
          </div>
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
                <a href="tel:345-273-6368">
                  <Icon type="phone" />
                </a>
                <a href="mailto:cristianmaschio@hotmail.it">
                  <Icon type="mail" />
                </a>
                <a href="https://github.com/CristianMaschio">
                  <Icon type="github" />
                </a>
                <a href="https://www.linkedin.com/in/cristian-maschio-37004a146">
                  <Icon type="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
