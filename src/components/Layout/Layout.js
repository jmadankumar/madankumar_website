import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import ScrollUp from 'react-scrollup-lite';
import * as FeatherIcon from 'react-feather';
import Header from '../Header';
import Footer from '../Footer';
import { useThemeContext } from '../../context/ThemeContext';

const StyledLayout = styled.div`
  .main-content {
    background-color: var(--bg-color);
    color: var(--text-color);
    margin-top: 60px;
  }
  .scroll-up-btn {
    background-color: var(--scroll-top-btn-bg-color);
    color: var(--scroll-top-btn-text-color);
  }
`;

const Layout = ({ children, name, showHeader }) => {
  const { theme } = useThemeContext();

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
    <StyledLayout className={`${theme}-theme`}>
      {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}

      <div className="main-content px-2 md:px-8 py-4 md:py-8">{children}</div>
      <Footer />
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
        <button className="scroll-up-btn p-2 rounded-full">
          <FeatherIcon.ArrowUp size={24} className="text-white" />
        </button>
      </ScrollUp>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
