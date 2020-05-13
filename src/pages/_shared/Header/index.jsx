import React, { useContext } from "react"
import {
  LinkedinFilled,
  MailFilled,
  GithubFilled,
  CloudDownloadOutlined,
} from "@ant-design/icons"

import ImageProfile from "../ImageProfile"
import Context from "../../../Context"

function HeaderContent(props) {
  return (
    <div>
      {props.personalData.map((content) => {
        return (
          <div key={content.key} className="header-content">
            <div className="line" />
            <div className="row-content">
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
    <div className="header-content">
      <div className="line" />
      <div className="row-content">
        <a
          href="mailto:cristianmaschio@hotmail.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailFilled />
        </a>
        <a
          href="https://github.com/CristianMaschio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubFilled />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-maschio-37004a146"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled />
        </a>
      </div>
    </div>
  )
}

export default function Header() {
  const { headerClass, setRenderInformation } = useContext(Context)

  const headerContent = require(`../../../assets/languages/En-content.json`)

  const closeHeaderInformation = (event) => {
    event.stopPropagation()
    setRenderInformation(false)
  }

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <header className={headerClass} onClick={closeHeaderInformation}>
      <div className="header-blue" />
      <div className="header-information" onClick={stopPropagation}>
        <div onClick={closeHeaderInformation} className="close" />
        <ImageProfile size={200} />
        <div className="header-container">
          <div className="line" />
          <h2>{headerContent.header.personal}</h2>
          <HeaderContent personalData={headerContent.header.personalData} />
        </div>
        <div className="header-container">
          <div className="line" />
          <h2>{headerContent.header.contacts}</h2>
          <HeaderContacts />
        </div>
        <div className="header-container">
          <div className="line" />
          <h2>
            <div className="download-cv">
              <div className="title">Download CV</div>
              <a
                href="https://drive.google.com/uc?export=download&id=1lB-ySL7IN_8K1UNJVK8TWG9OqxAvVtdG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CloudDownloadOutlined />
              </a>
            </div>
          </h2>
          <div className="header-content">
            <div className="line" />
            <div className="row-content" />
          </div>
        </div>
        <div className="eu-regolation">{headerContent.privacyTerms}</div>
      </div>
    </header>
  )
}
