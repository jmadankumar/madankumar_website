import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
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
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
