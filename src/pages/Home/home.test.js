import React from 'react'
import rederer from 'react-test-renderer'
import Home from '.'

it('Home: render correctly', ()=> {
  const home = rederer.create(<Home />).toJSON()

  expect(home).toMatchSnapshot()
})