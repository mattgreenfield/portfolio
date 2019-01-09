import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './Layout.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, width }) => {
  const wrapperClasses = classNames('PageWrapper', {
    [`PageWrapper--${width}`]: true,
  });
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { name: 'theme-color', content: '#2196F3' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={wrapperClasses}>{children}</div>
          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOf(['medium', 'large']),
};

Layout.defaultProps = {
  width: 'large',
};

export default Layout;
