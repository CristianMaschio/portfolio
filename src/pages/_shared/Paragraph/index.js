import React, { PureComponent } from "react"
import "./Paragraph.css"

export default class Paragraph extends PureComponent {
  render() {
    const { title, image, sections, index } = this.props
    const isLeft = index % 2 === 0
    return (
      <>
        <div className={isLeft ? "leftLine" : "rightLine"} />
        <div className="paragraph">
          <h2
            className={
              isLeft ? "paragraphTitle leftTitle" : "paragraphTitle rightTitle"
            }
          >
            {title}
          </h2>
          <div
            className={
              isLeft
                ? "paragraphContainer leftParagraph"
                : "paragraphContainer rightParagraph"
            }
          >
            <div className="sectionsContainer">
              {sections.map((section, index) => {
                return (
                  <div key={index}>
                    <p>{section.date}</p>
                  </div>
                )
              })}
            </div>
            <img
              className="paragraphImage"
              alt="Universtity of Padua logo"
              src={image && require("../../../../public/images/" + image)}
            />
          </div>
        </div>
      </>
    )
  }
}
