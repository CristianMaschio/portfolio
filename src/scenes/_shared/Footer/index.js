import React, { useContext } from "react"
import "./Footer.scss"

import AppState from "../../../gState/context"

export default function Footer() {
  const { language } = useContext(AppState)
  const privacyTerms = require(`../../../data/${language}-content.json`)
    .privacyTerms

  return (
    <footer>
      <ul>
        <li>
          <a href="tel:345-273-6368" target="_blank" rel="noopener noreferrer">
            +39 3452736368
          </a>
        </li>
        <li>
          <a
            href="mailto:cristianmaschio@hotmail.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            CristianMaschio@hotmail.it
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cristian-maschio-37004a146"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/cristian-maschio-37004a146
          </a>
        </li>
        <li>
          <a
            href="https://github.com/CristianMaschio"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/CristianMaschio
          </a>
        </li>
        <li>{privacyTerms}</li>
      </ul>
    </footer>
  )
}
