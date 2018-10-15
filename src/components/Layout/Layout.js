import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.scss';

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
              { name: 'keywords', content: 'sample, something' },
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
