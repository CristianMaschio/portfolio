import React, { PureComponent } from "react"
import "./Paragraph.css"

export default class Paragraph extends PureComponent {
  state = {
    isLeft: undefined
  }

  componentDidMount(){
    this.setState({isLeft: this.props.index % 2 === 0})
  }

  //----------Functions-----------

  renderParagraphContent = () => {
    const { title, image, sections } = this.props
    const isLeft = this.state.isLeft

    return(
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
    )
  }

  //------------Render--------------

  render() {
    const isLeft = this.state.isLeft
    return (
      <>
        <div className={isLeft ? "leftLine" : "rightLine"} />
        {this.renderParagraphContent()}
      </>
    )
  }
}
