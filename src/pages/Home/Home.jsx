import React, { PureComponent } from "react";
import Parallax from "react-rellax";
import Paragraph from "../../components/Paragraph";
import ImageProfile from "components/ImageProfile";
import imgBackground from "../../assets/images/intro.jpg";

class Home extends PureComponent {
  state = {
    paragraphs: undefined,
  };

  componentDidMount() {
    this.setState({
      paragraphs: require(`../../assets/languages/En-paragraphs.json`)
        .paragraphs,
    });
  }

  render() {
    return (
      <div className="home">
        <div className="image-background">
          <img
            src={imgBackground}
            alt="desktop setup"
            height="100%"
            width="100%"
          />
          <div className="image-overlay" />
        </div>
        <Parallax speed={-3}>
          <div className="intro intro-flex-center">
            <div>
              <ImageProfile size={200} />
            </div>
            <div className="intro-flex-center">
              <div className="">
                <h1>Cristian Maschio</h1>
                <h2>{"<SeniorFrontEndEngineer />"}</h2>
              </div>
            </div>
          </div>
        </Parallax>
        {/* <Menu paragraphs={this.state.paragraphs} /> */}
        <div className="paragraphs">
          <div className="waves-top">
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
              <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
              <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
            </svg>
          </div>

          {this.state.paragraphs?.map((paragraph, index) => {
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
