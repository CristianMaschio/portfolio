import React, { PureComponent } from "react";
import Paragraph from "./Paragraph";
import Menu from "./Menu";
import Rellax from "rellax";

class Home extends PureComponent {
  state = {
    paragraphs: undefined,
  };

  componentDidMount() {
    this.setState({
      paragraphs: require(`../../assets/languages/En-paragraphs.json`)
        .paragraphs,
    });
    new Rellax(".animate", {
      speed: -3,
    });
  }

  render() {
    return (
      <div className="home">
        <div className="intro intro-white-trasparence">
          <div className="intro-white-trasparence">
            <div className="foolishIn animate">
              <h1>Cristian Maschio</h1>
              <h2>{"<SoftwareEngineer />"}</h2>
            </div>
          </div>
        </div>
        <Menu paragraphs={this.state.paragraphs} />
        <div className="paragraphs">
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
