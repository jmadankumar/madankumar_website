import React, { Component } from 'react';
import * as FeatherIcon from 'react-feather';
import './nav.scss';
import ProfileImage from '../../images/new_profile.webp';
const navLinks = [{
    //     name: 'Porfolio',
    //     icon: FeatherIcon.User,
    //     href: "/"
    // }, {
    name: 'Experience',
    icon: FeatherIcon.Layers,
    href: "/experience"
}, {
    //     name: 'Work',
    //     icon: FeatherIcon.Grid,
    //     href: "/work"
    // }, {
    name: 'Blog',
    icon: FeatherIcon.Feather,
    href: "/blog"
}];

class NavItem extends Component {
    render() {
        const { name, icon: Icon, href, isActive } = this.props;
        return (
            <li className={"nav-item " + (isActive ? "active" : "")} >
                <a className="nav-link" href={href}>
                    <Icon size={20} />
                    {name}
                </a>
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
                        <img src={ProfileImage} className="brand-image rounded-full" alt="profile" />
                        <span className="brand-name">Madan Kumar</span>
                    </a>
                    <ul className="flex justify-around flex-grow md:flex-grow-0">
                        {
                            navLinks.map(navlink => {
                                return (<NavItem name={navlink.name} href={navlink.href}
                                    icon={navlink.icon} key={navlink.name}
                                    isActive={this.checkLink(navlink.name, currentLinkName)} />)
                            })
                        }
                    </ul>
                </div>
            </div>);
    }
}
export default Nav;