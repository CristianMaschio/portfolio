import React, { useContext } from "react"
import Context from "../../../Context"
import { InfoCircleFilled } from "@ant-design/icons"

const menuLink = require(`../../../assets/languages/En-content.json`).menu

export default function Menu() {
  const { setRenderInformation } = useContext(Context)

  return (
    <div className="menu">
      <InfoCircleFilled className="info-menu" onClick={setRenderInformation} />
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
