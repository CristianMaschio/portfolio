import React from "react"
import renderer from "react-test-renderer"
import ImageProfile from "."

it("ImageProfile: render correctly", () => {
  const imageProfile = renderer.create(<ImageProfile size={20} />).toJSON()
  expect(imageProfile).toMatchSnapshot()
})