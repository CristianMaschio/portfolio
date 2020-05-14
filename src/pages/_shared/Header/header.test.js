import React from "react"
import Header from "../Header"
import renderer from "react-test-renderer"

it("Header: render correctly", () => {
  const header = renderer.create(<Header />).toJSON()
  expect(header).toMatchSnapshot()
})
