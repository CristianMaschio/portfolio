import React, { Component } from "react"
import "./Menu.scss"

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#professional">Professional</a>
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
