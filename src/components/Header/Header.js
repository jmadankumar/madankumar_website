import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ProfileImage from '../../images/drawing.svg';
import Nav from '../Nav';
import { useThemeContext } from '../../context/ThemeContext';
import * as FeatherIcon from 'react-feather';
import cx from 'classnames';

const ThemeButton = () => {
  const { theme, setTheme, ICON_SIZE } = useThemeContext();

  const handleThemeClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      className="text-2xl theme-btn"
      onClick={handleThemeClick}
    >
      {theme === 'light' ? (
        <FeatherIcon.Moon size={ICON_SIZE} />
      ) : (
        <FeatherIcon.Sun size={ICON_SIZE} />
      )}
    </button>
  );
};

const MenuButton = ({ className }) => {
  const { ICON_SIZE, openNavMenu } = useThemeContext();

  return (
    <button
      type="button"
      className={cx('text-2xl theme-btn ml-4', className)}
      onClick={openNavMenu}
    >
      <FeatherIcon.Menu size={ICON_SIZE} />
    </button>
  );
};

const StyledHeader = styled.div`
  background: var(--bg-color, #001220);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 999;

  border-bottom:1px solid #002233;

  .brand-image {
    width: 40px;
    height: 40px;
  }
  .brand-name {
    color: var(--brand-name-color);
  }
  .theme-btn {
    color: var(--text-color);
  }

  @media screen and (min-width: 768px) {
    .menu-btn {
      display: none;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="header-container flex justify-between items-center px-8 py-2">
      <a className="nav-link " href="/" className="brand flex">
        <img
          src={ProfileImage}
          className="brand-image rounded-full"
          alt="profile"
        />
        <span className="brand-name font-bold text-3xl uppercase ml-3">
          Madan Kumar
        </span>
      </a>
      <div className="nav-container flex">
        <Nav />
        <ThemeButton />
        <MenuButton className="menu-btn" />
      </div>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
