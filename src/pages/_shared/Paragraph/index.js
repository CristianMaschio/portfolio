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
    const { moreSections } = this.props
    return (
      <div className="sectionsContainer">
        {moreSections.map((section, index) => {
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
          <img
            className="paragraphImage"
            alt="Universtity of Padua logo"
            src={image && require("../../../data/images/" + image)}
          />
          <h2 className="paragraphTitle">{title}</h2>
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
                  <div className="sectionContent description">
                    <h3>{section.title} </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  </div>
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
    const { id, moreSections } = this.props
    const { isLeft, moreContent } = this.state
    return (
      <div id={id} style={{ paddingTop: "3rem" }}>
        <div className={isLeft ? "leftLine" : "rightLine"} />
        {this.renderParagraphContent()}
        {moreSections && moreSections.length >= 1 ? (
          <p
            className="more-paragraph"
            onClick={() => this.setState({ moreContent: !moreContent })}
          >
            {!moreContent ? "more" : "less"}
          </p>
        ) : (
          ""
        )}
      </div>
    )
  }
}
