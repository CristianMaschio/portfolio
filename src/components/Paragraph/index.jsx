import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Paragraph extends PureComponent {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    sections: PropTypes.array.isRequired,
    moreSections: PropTypes.array,
  };

  state = {
    moreContent: false,
  };

  static defaultPropTypes = {
    index: 0,
    image: "",
    moreSections: [],
  };

  moreContent = React.createRef();

  //----------Functions-----------
  getSectionElements(sections) {
    return sections?.map((section, index) => {
      return (
        <div className="sectionContainer" key={index}>
          {section.img && (
            <div className="section-image">
              <img
                alt={`${section.title}`}
                src={require("../../assets/images/" + section.img)}
              />
            </div>
          )}
          <div className="sectionContent description">
            <p className="date">{section.date}</p>
            <h3>{section.title}</h3>
            {section.technologies ? (
              <div className="multy-section">
                <div className="sub-section">
                  <div className="sub-section-title">Technologies:</div>
                  <div
                    className="sub-section-content"
                    dangerouslySetInnerHTML={{ __html: section.technologies }}
                  />
                </div>
                <div className="sub-section">
                  <div className="sub-section-title">Achieving:</div>
                  <div
                    className="sub-section-content"
                    dangerouslySetInnerHTML={{ __html: section.achieving }}
                  />
                </div>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: section.description }} />
            )}
            {section.link && (
              <div className="link-container">
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"View"}
                </a>
              </div>
            )}
          </div>
        </div>
      );
    });
  }

  handleMoreContent = () => {
    const { moreContent } = this.state;
    if (!moreContent) {
      this.moreContent.current.style.height =
        this.moreContent.current.scrollHeight + 20 + "px";
    } else {
      this.moreContent.current.style.height = "0px";
    }

    this.setState({ moreContent: !moreContent });
  };

  //------------Render--------------
  render() {
    const { id, title, moreSections, sections } = this.props;
    const { moreContent } = this.state;
    return (
      <div id={id}>
        <div className="paragraph">
          <div className="paragraphContainer">
            <h2 className="paragraphTitle">{title}</h2>
          </div>
          <div className="paragraphContainer">
            <div className="sectionsContainer">
              {this.getSectionElements(sections)}
              <div ref={this.moreContent} className="more-container">
                {this.getSectionElements(moreSections)}
              </div>
            </div>
          </div>
        </div>
        {moreSections && moreSections.length >= 1 && (
          <p className="more-paragraph" onClick={this.handleMoreContent}>
            {!moreContent ? "more" : "less"}
          </p>
        )}
      </div>
    );
  }
}
