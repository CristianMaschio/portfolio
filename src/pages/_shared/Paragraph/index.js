import React, { PureComponent } from "react"
import "./Paragraph.scss"

export default class Paragraph extends PureComponent {
  state = {
    isLeft: undefined,
    moreContent: false,
    sectionsElements: undefined
  }

  componentDidMount() {
    const { sections } = this.props

    //Create only one time all the sections
    const sectionsElements = this.getSectionElements(sections)

    this.setState({ isLeft: this.props.index % 2 === 0, sectionsElements })
  }

  moreContent = React.createRef()

  //----------Functions-----------

  //this fuction create all section components.
  getSectionElements(sections) {
    return (
      sections &&
      sections.map((section, index) => {
        return (
          <div className="sectionContainer" key={index}>
            <p className="sectionContent date">{section.date}</p>
            <div className="sectionContent description">
              <h3>{section.title} </h3>
              <div dangerouslySetInnerHTML={{ __html: section.description }} />
            </div>
          </div>
        )
      })
    )
  }

  handleMoreContent = () => {
    const { moreContent } = this.state
    if (!moreContent) {
      this.moreContent.current.style.height =
        this.moreContent.current.scrollHeight + "px"
    } else {
      this.moreContent.current.style.height = "0px"
    }

    this.setState({ moreContent: !moreContent })
  }

  //--------Render-Functions-------

  renderMoreContent = () => {
    const { moreSections } = this.props
    return (
      <div ref={this.moreContent} className="more-container">
        <div className="rightLine" />
        <div className="sectionsContainer">
          {this.getSectionElements(moreSections)}
        </div>
      </div>
    )
  }

  renderParagraphContent = () => {
    const { title, image } = this.props
    const { isLeft, sectionsElements } = this.state

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
          <div className="sectionsContainer">{sectionsElements}</div>
        </div>
        {this.renderMoreContent()}
      </div>
    )
  }

  renderMoreLessButton = () => {
    const { moreSections } = this.props
    const { moreContent } = this.state
    return (
      <>
        {moreSections && moreSections.length >= 1 ? (
          <p className="more-paragraph" onClick={this.handleMoreContent}>
            {!moreContent ? "more" : "less"}
          </p>
        ) : (
          ""
        )}
      </>
    )
  }

  //------------Render--------------

  render() {
    const { id } = this.props
    const { isLeft } = this.state
    return (
      <div id={id} style={{ paddingTop: "3rem" }}>
        <div className={isLeft ? "leftLine" : "rightLine"} />
        {this.renderParagraphContent()}
        {this.renderMoreLessButton()}
      </div>
    )
  }
}
