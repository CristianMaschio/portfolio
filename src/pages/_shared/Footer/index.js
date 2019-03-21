import React, { PureComponent } from "react"
import "./Footer.scss"

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href="tel:345-273-6368">+39 3452736368</a>
          </li>
          <li>
            <a href="mailto:cristianmaschio@hotmail.it">
              CristianMaschio@hotmail.it
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cristian-maschio-37004a146">
              https://www.linkedin.com/in/cristian-maschio-37004a146
            </a>
          </li>
          <li>
            <a href="https://github.com/CristianMaschio">
              https://github.com/CristianMaschio
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}
