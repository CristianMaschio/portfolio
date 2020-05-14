import React from "react"
import renderer from "react-test-renderer"
import Footer from "."

it("Footer: render correctly", () => {
  const footer = renderer.create(<Footer />).toJSON()
  expect(footer).toMatchSnapshot()
})
