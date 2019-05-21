import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './Layout.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ThemePicker from 'components/ThemePicker/ThemePicker';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'default',
    };

    this.onThemeChange = this.onThemeChange.bind(this);
  }
  onThemeChange(theme) {
    this.setState({ theme: theme });
  }
  render() {
    const { children, width } = this.props;
    const { theme } = this.state;
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
                { name: 'theme-color', content: '#4682b4' },
              ]}
            >
              <html lang="en" className={`theme theme--${theme}`} />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <ThemePicker onThemeChange={this.onThemeChange} theme={theme} />
            <div className={wrapperClasses}>{children}</div>
            <Footer />
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOf(['medium', 'large']),
};

Layout.defaultProps = {
  width: 'large',
};

export default Layout;
