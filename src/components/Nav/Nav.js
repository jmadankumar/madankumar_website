import React, { useCallback, useEffect } from 'react';
import * as FeatherIcon from 'react-feather';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { useThemeContext } from '../../context/ThemeContext';
import cx from 'classnames';

const navLinks = [
  {
    name: 'Experience',
    icon: FeatherIcon.Layers,
    href: '/experience',
    isExternal: false,
  },
  {
    name: 'Blog',
    icon: FeatherIcon.Feather,
    href: '/blog',
    isExternal: false,
  },
  {
    name: 'Resume',
    icon: FeatherIcon.BookOpen,
    href: '/MadanKumar_Resume.pdf',
    isExternal: true,
  },
];

const CloseButton = ({ className, onClick }) => {
  const { ICON_SIZE } = useThemeContext();

  return (
    <button
      type="button"
      className={cx('text-2xl theme-btn ml-4', className)}
      onClick={onClick}
    >
      <FeatherIcon.X size={ICON_SIZE} />
    </button>
  );
};

const StyledNavItem = styled.li`
  font-size: 24px;
  padding: 0.5rem 1rem;

  .nav-link {
    color: var(--text-color);
  }

  .nav-link-icon {
    width: 24px;
    height: 24px;
  }
  .nav-link-text {
    margin-left: 1rem;
  }

  @media screen and (min-width: 768px) {
    & {
      font-size: 16px;
      padding: 0.5rem 1rem;
    }
    .nav-link-icon {
      width: 20px;
      height: 20px;
    }
    .nav-link-text {
      margin-left: 0.5rem;
    }
  }
`;

const NavItem = ({ name, icon: Icon, href, isActive, isExternal, onClick }) => {
  const content = (
    <>
      {Icon && <Icon size={20} className="nav-link-icon" />}
      <span className="nav-link-text">{name}</span>
    </>
  );

  const navLinkClassName = 'nav-link flex items-center';

  return (
    <StyledNavItem
      className={'nav-item flex font-medium' + (isActive ? 'active' : '')}
      onClick={onClick}
    >
      {isExternal ? (
        <a
          className={navLinkClassName}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </a>
      ) : (
        <Link className={navLinkClassName} to={href}>
          {content}
        </Link>
      )}
    </StyledNavItem>
  );
};

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: var(--side-menu-color);
  box-shadow: 0px 0px 1px #000;
  padding: 1rem;
  display: none;

  &.open {
    display: block;
  }

  .nav-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .nav-menu-header {
    display: block;
  }

  @media screen and (min-width: 768px) {
    & {
      position: relative;
      width: 100%;
      background-color: var(--bg-color);
      box-shadow: none;
      padding: 0;
      display: block !important;
    }
    .nav-menu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }
    .nav-menu-header {
      display: none;
    }
  }
`;

const Nav = ({ currentLinkName }) => {
  const { isNavOpen, closeNavMenu } = useThemeContext();

  const checkLink = (linkName, currentLinkName) => {
    return linkName === currentLinkName;
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768 && isNavOpen) {
      closeNavMenu();
    }
  }, [closeNavMenu, isNavOpen]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <StyledNav className={cx({ open: isNavOpen })}>
      <div className="nav-menu-header">
        <CloseButton onClick={closeNavMenu} />
      </div>
      <ul className="nav-menu">
        {navLinks.map((navlink) => {
          return (
            <NavItem
              name={navlink.name}
              href={navlink.href}
              icon={navlink.icon}
              key={navlink.name}
              isActive={checkLink(navlink.name, currentLinkName)}
              isExternal={navlink.isExternal}
              onClick={closeNavMenu}
            />
          );
        })}
      </ul>
    </StyledNav>
  );
};
export default Nav;
