import React, { Component } from "react"
import "./Home.css"

import Paragraph from "../_shared/Paragraph"
import data from "../../data/data"

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>Cristian Maschio</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="paragraphs">
          {data.paragraphs.map((paragraph, index) => {
            return (
              <Paragraph
                key={index}
                index={index}
                title={paragraph.title}
                image={paragraph.image}
                sections={paragraph.sections}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home
