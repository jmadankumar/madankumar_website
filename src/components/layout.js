import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header';
import Footer from './Footer';
import Nav from './Nav';
import '../scss/global.scss';
import './layout.css';
import 'prismjs/themes/prism-tomorrow.css';

const Layout = ({ children, name, showHeader }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {showHeader && (<Header siteTitle={data.site.siteMetadata.title} />)}
        <div className="main-content">
          {children}
        </div >
        <Footer />
        <Nav currentLinkName={name} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
