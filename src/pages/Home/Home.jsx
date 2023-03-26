import React, { PureComponent } from "react";
import Parallax from "react-rellax";
import Paragraph from "../../components/Paragraph";
import ImageProfile from "components/ImageProfile";
import { Fade } from "react-reveal";
import TagsCanvas from "react-tags-canvas";
import background from "../../utils/background";
import json from "../../assets/languages/En-paragraphs.json";

class Home extends PureComponent {
  componentDidMount() {
    background();
  }

  render() {
    console.log(json);
    return (
      <div className="home">
        <div className="image-background">
          <canvas id="canvas"></canvas>
        </div>
        <Parallax speed={-3}>
          <div className="intro intro-flex-center">
            <ImageProfile size={200} />
            <div className="intro-flex-center">
              <h1>Cristian Maschio</h1>
              <h2>{"<SeniorFrontEndEngineer />"}</h2>
            </div>
          </div>
        </Parallax>
        <div className="paragraphs">
          <div className="waves-top">
            <svg
              fill="rgba(255, 255, 255, 0.97)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path d="M 0 14 s 88.64 3.48 300 36 c 260 40 514 27 703 -10 l 12 28 l 3 36 h -1018 z"></path>
              <path d="M 0 45 s 271 45.13 500 32 c 157 -9 330 -47 515 -63 v 86 h -1015 z"></path>
              <path d="M 0 58 s 188.29 32 508 32 c 290 0 494 -35 494 -35 v 45 h -1002 z"></path>
            </svg>
          </div>
          <div className="paragraph">
            <h2 className="paragraphTitle">About me</h2>
            <TagsCanvas
              style={{ width: "40rem", height: "40rem" }}
              textColour="rgba(59, 98, 196, 0.9)"
              maxSpeed={0.06}
              weightSize={0.5}
              shape="sphere"
              noSelect
              tags={[
                { value: "Javascript", weight: 30 },
                { value: "React", weight: 40 },
                { value: "HTML5", weight: 20 },
                { value: "CSS3", weight: 20 },
                { value: "Typescript", weight: 30 },
                { value: "Git", weight: 20 },
                { value: "Redux", weight: 20 },
                { value: "Redux-Saga", weight: 20 },
                { value: "NodeJS", weight: 20 },
                { value: "NextJS", weight: 20 },
                { value: "Docker", weight: 15 },
                { value: "React-Native", weight: 20 },
                { value: "Firebase", weight: 20 },
                { value: "AWS", weight: 20 },
                { value: "Gatsby", weight: 20 },
                { value: "GraphQL", weight: 20 },
              ]}
            />
          </div>

          {json.paragraphs?.map((paragraph, index) => {
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
