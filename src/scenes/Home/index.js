import React, { PureComponent } from "react"
import "./Home.scss"

import AppState from "../../gState/context"
import Paragraph from "../_shared/Paragraph"
import Menu from "../_shared/Menu"

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>Cristian Maschio</h1>
          <h2>{"{Software Developer}"}</h2>
        </div>
        <Menu />
        <div className="paragraphs">
          <AppState.Consumer>
            {({ language }) => {
              return require(`../../data/${language}-paragraphs.json`).paragraphs.map(
                (paragraph, index) => {
                  return (
                    <Paragraph
                      id={paragraph.id}
                      key={index}
                      index={index}
                      title={paragraph.title}
                      image={paragraph.image}
                      sections={paragraph.sections}
                      moreSections={paragraph.more}
                    />
                  )
                }
              )
            }}
          </AppState.Consumer>
        </div>
      </div>
    )
  }
}

export default Home
