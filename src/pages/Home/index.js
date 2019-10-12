import React, { PureComponent } from "react"
import Paragraph from "./_shared/Paragraph"
import Menu from "./_shared/Menu"

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <div className="intro intro-white-trasparence">
          <div className="intro-white-trasparence">
            <div className="foolishIn">
              <h1>Cristian Maschio</h1>
              <h2>{"<SoftwareEngineer />"}</h2>
            </div>
          </div>
        </div>
        <Menu />
        <div className="paragraphs">
          {require(`../../assets/languages/En-paragraphs.json`).paragraphs.map(
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
          )}
        </div>
      </div>
    )
  }
}

export default Home
