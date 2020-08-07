import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollUp from 'react-scrollup-lite';
import * as FeatherIcon from 'react-feather';
import Header from './header';
import Footer from './Footer';
import Nav from './Nav';
import '../scss/global.scss';
import './layout.css';
// import 'prismjs/themes/prism-tomorrow.css';

const Layout = ({ children, name, showHeader }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <>
            {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
            <div className="main-content">{children}</div>
            <Footer />
            <Nav currentLinkName={name} />
            <ScrollUp
                startPosition={0}
                showAtPosition={100}
                position="right"
                className="scroll-up"
                style={{
                    right: '20px',
                    bottom: '60px',
                }}
            >
                <button className="bg-purple-500 p-2 rounded-full">
                    <FeatherIcon.ArrowUp size={24} className="text-white" />
                </button>
            </ScrollUp>
        </>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
