import React from "react"
import renderer from "react-test-renderer"
import Menu from "."

it("Menu: render correctly", () => {
  const menu = renderer
    .create(
      <Menu
        paragraphs={[
          { id: "test", title: "test" },
          { id: "test1", title: "test1" },
        ]}
      />
    )
    .toJSON()

  expect(menu).toMatchSnapshot()
})
