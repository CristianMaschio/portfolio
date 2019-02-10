import React, { PureComponent } from "react"
import "./Paragraph.scss"

export default class Paragraph extends PureComponent {
  state = {
    isLeft: undefined,
    moreContent: false
  }

  componentDidMount() {
    this.setState({ isLeft: this.props.index % 2 === 0 })
  }

  //----------Functions-----------
  renderMoreContent = () => {
    const { sections } = this.props
    return (
      <div className="sectionsContainer">
        {sections.map((section, index) => {
          return (
            <div className="sectionContainer" key={index}>
              <p className="sectionContent date">{section.date}</p>
              <p className="sectionContent description">
                {section.description}
              </p>
            </div>
          )
        })}
      </div>
    )
  }

  renderParagraphContent = () => {
    const { title, image, sections } = this.props
    const { isLeft, moreContent } = this.state

    return (
      <div className="paragraph">
        <div
          className={
            isLeft
              ? "paragraphContainer leftParagraph"
              : "paragraphContainer rightParagraph"
          }
        >
          <h2
            className={
              isLeft ? "paragraphTitle leftTitle" : "paragraphTitle rightTitle"
            }
          >
            {title}
          </h2>
          <img
            className="paragraphImage"
            alt="Universtity of Padua logo"
            src={image && require("../../../data/images/" + image)}
          />
        </div>
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
                <div className="sectionContainer" key={index}>
                  <p className="sectionContent date">{section.date}</p>
                  <p className="sectionContent description">
                    {section.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        {moreContent && this.renderMoreContent()}
      </div>
    )
  }

  //------------Render--------------

  render() {
    const { isLeft, moreContent } = this.state
    return (
      <>
        <div className={isLeft ? "leftLine" : "rightLine"} />
        {this.renderParagraphContent()}
        <p onClick={() => this.setState({ moreContent: !moreContent })}>more</p>
      </>
    )
  }
}
