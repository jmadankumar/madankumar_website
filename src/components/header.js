import PropTypes from 'prop-types';
import React from 'react';
import ProfileImage from '../images/drawing.svg';

const Header = ({ siteTitle }) => (
  <div className="header-bar">
    <div className="header-container">
      <a className="brand" href="/">
        <img
          src={ProfileImage}
          className="brand-image rounded-full"
          alt="profile"
        />
        <span className="brand-name uppercase tracking-tight font-semibold text-white">Madan Kumar</span>
      </a>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
