import "./Header.scss"
import React, { useContext } from "react"
import Icon from "antd/lib/icon"

import ImageProfile from "../ImageProfile"
import AppState from "../../../gState/context"

function HeaderContent(props) {
  return (
    <div>
      {props.personalData.map(content => {
        return (
          <div key={content.key} className="menu-content">
            <div className="line" />
            <div className="container">
              <p>{content.key}:</p>
              <p>{content.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function HeaderContacts() {
  return (
    <div className="menu-content">
      <div className="line" />
      <div className="container">
        <a href="tel:345-273-6368" target="_blank" rel="noopener noreferrer">
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
  )
}

export default function Header() {
  const { headerClass, setRenderInformation, language } = useContext(AppState)
  const headerContent = require(`../../../data/${language}-content.json`)

  return (
    <header className={headerClass}>
      <div onClick={() => setRenderInformation(false)} className="close" />
      <div className="header-blue" />
      <div className="header-information">
        <ImageProfile size={200} />
        <div className="menu-container">
          <div className="line" />
          <h2>{headerContent.header.personal}</h2>
          <HeaderContent personalData={headerContent.header.personalData} />
        </div>
        <div className="menu-container">
          <div className="line" />
          <h2>{headerContent.header.contacts}</h2>
          <HeaderContacts />
        </div>
        <div className="eu-regolation">{headerContent.privacyTerms}</div>
      </div>
    </header>
  )
}
