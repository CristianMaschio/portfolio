import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import imageProfile from "../../../assets/images/imageProfile.jpg"

export default class ImageProfile extends PureComponent {
  static propTypes = {
    size: PropTypes.number.isRequired
  }

  render() {
    const { size } = this.props
    const cSize = size + size / 20

    return (
      <div className="image-container">
        <div
          className="image-background-animation"
          style={{ height: cSize, width: cSize }}
        />
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
