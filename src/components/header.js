import {  } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ProfileImage from '../images/new_profile.webp';

const Header = ({ siteTitle }) => (
  <div className="header-bar">
    <div className="header-container">
      <div className="brand">
        <img src={ProfileImage} className="brand-image rounded-circle" />
        <span className="brand-name">Madan Kumar</span>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
