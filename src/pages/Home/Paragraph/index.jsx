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
    sectionsElements: undefined,
  };

  componentDidMount() {
    const { sections } = this.props;

    //Create only one time all the sections
    const sectionsElements = this.getSectionElements(sections);

    this.setState({ sectionsElements });
  }

  static defaultPropTypes = {
    index: 0,
    image: "",
    moreSections: [],
  };

  moreContent = React.createRef();

  //----------Functions-----------

  //this fuction create all section components.
  getSectionElements(sections) {
    return (
      sections &&
      sections.map((section, index) => {
        return (
          <div className="sectionContainer" key={index}>
            {section.img && (
              <div className="section-image">
                <img
                  alt={`${section.title}`}
                  src={require("../../../assets/images/" + section.img).default}
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
                <div
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              )}
              {section.link && (
                <div className="link-container">
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"Go to page >>"}
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })
    );
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

  //--------Render-Functions-------
  renderParagraphContent = () => {
    const { title, image, moreSections } = this.props;
    const { sectionsElements } = this.state;

    return (
      <div className="paragraph">
        <div className="paragraphContainer">
          <img
            className="paragraphImage"
            alt="Universtity of Padua logo"
            src={image && require("../../../assets/images/" + image).default}
          />
          <h2 className="paragraphTitle">{title}</h2>
          <img
            className="paragraphImage"
            alt="Universtity of Padua logo"
            src={image && require("../../../assets/images/" + image).default}
          />
        </div>
        <div className="paragraphContainer">
          <div className="sectionsContainer">
            {sectionsElements}
            <div ref={this.moreContent} className="more-container">
              {this.getSectionElements(moreSections)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  //------------Render--------------

  render() {
    const { id, moreSections } = this.props;
    const { moreContent } = this.state;
    return (
      <div id={id}>
        {this.renderParagraphContent()}
        {moreSections && moreSections.length >= 1 ? (
          <p className="more-paragraph" onClick={this.handleMoreContent}>
            {!moreContent ? "more" : "less"}
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
