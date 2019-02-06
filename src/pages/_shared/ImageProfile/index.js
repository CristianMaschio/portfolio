import React, { Component } from "react"
import PropTypes from "prop-types"

import "./ImageProfile.scss"
import imageProfile from "./imageProfile.jpg"

export default class ImageProfile extends Component {
  propTypes = {
    size: PropTypes.number.isRequired
  }

  render() {
    const { size } = this.props
    const cSize = size + size / 20

    return (
      <div className="image-container" style={{ height: cSize, width: cSize }}>
        <img
          className="image-profile"
          alt="profile"
          src={imageProfile}
          style={{ height: size, width: size }}
        />
      </div>
    )
  }
}
