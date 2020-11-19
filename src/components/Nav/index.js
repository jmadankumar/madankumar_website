import React, { Component } from 'react';
import * as FeatherIcon from 'react-feather';
import './nav.scss';
import ProfileImage from '../../images/drawing.svg';
import { Link } from 'gatsby';

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

class NavItem extends Component {
    render() {
        const { name, icon: Icon, href, isActive, isExternal } = this.props;
        const content = (
            <>
                {Icon && <Icon size={20} />}
                {name}
            </>
        );
        return (
            <li
                className={
                    'nav-item font-medium text-base md:text-xl ' +
                    (isActive ? 'active' : '')
                }
            >
                {isExternal ? (
                    <a className="nav-link" href={href} target="_blank">
                        {content}
                    </a>
                ) : (
                    <Link className="nav-link" to={href}>
                        {content}
                    </Link>
                )}
            </li>
        );
    }
}

class Nav extends Component {
    checkLink(linkName, currentLinkName) {
        return linkName === currentLinkName;
    }

    render() {
        const { currentLinkName } = this.props;
        return (
            <div className="mk-navbar">
                <div className="flex justify-between">
                    <a className="nav-link" href="/" className="brand">
                        <img
                            src={ProfileImage}
                            className="brand-image rounded-full"
                            alt="profile"
                        />
                        <span className="brand-name uppercase">
                            Madan Kumar
                        </span>
                    </a>
                    <ul className="flex justify-around flex-grow md:flex-grow-0">
                        {navLinks.map((navlink) => {
                            return (
                                <NavItem
                                    name={navlink.name}
                                    href={navlink.href}
                                    icon={navlink.icon}
                                    key={navlink.name}
                                    isActive={this.checkLink(
                                        navlink.name,
                                        currentLinkName
                                    )}
                                    isExternal={navlink.isExternal}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Nav;
