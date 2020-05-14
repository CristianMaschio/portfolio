import React from "react"
import renderer from "react-test-renderer"
import Paragraph from "."

it("Paragraph: render correctly", () => {
  const paragraph = renderer
    .create(
      <Paragraph
        id="test"
        index={0}
        title={"test"}
        sections={[
          {
            img: "gestionaleauto.png",
            date: "05/2019 - 30/09/2019",
            title: "GestionaleAuto.com - React Developer",
            technologies:
              "React, Javascript, Redux, Redux-Form, Redux-Saga, Html & Scss.",
            achieving:
              "Learned to working in Agile Scrum team: my daily tasks ranged from refactoring to develop new feature for a large project code base of a management software. In which I managed to improve the simplicity and performance of some components, making them 30-40% faster.",
            link: "https://gestionaleauto.com/",
          },
          {
            img: "discontinuity.png",
            date: "10/2018 - 04/2019",
            title: "Discontinuity - Full Stack Developer",
            technologies:
              "React Native, React, Javascript, Gatsby, AWS, DynamoDB, GraphQL, Html & Scss.",
            achieving:
              "Working in Agile team, with maintaining and implementing applications and web sites from scratch",
            link: "http://discontinuity.eu/",
          },
        ]}
      />
    )
    .toJSON()

  expect(paragraph).toMatchSnapshot()
})
 