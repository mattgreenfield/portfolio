import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './Layout.scss';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ThemePickerRandom from 'components/ThemePicker/Random/ThemePickerRandom';

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
                keywords
                availableThemes
              }
            }
          }
        `}
        render={data => {
          const {
            title,
            description,
            keywords,
            availableThemes,
          } = data.site.siteMetadata;
          return (
            <>
              <Helmet
                title={title}
                meta={[
                  {
                    name: 'description',
                    content: description,
                  },
                  {
                    name: 'keywords',
                    content: keywords,
                  },
                  { name: 'theme-color', content: '#4682b4' },
                ]}
              >
                <html lang="en" className={`theme theme--${theme}`} />
              </Helmet>
              <Header siteTitle={title} />
              <ThemePickerRandom
                onThemeChange={this.onThemeChange}
                theme={theme}
                availableThemes={availableThemes}
              />
              <div className={wrapperClasses}>
                {React.cloneElement(children, {
                  onThemeChange: this.onThemeChange,
                  currentTheme: theme,
                })}
              </div>
              <Footer />
            </>
          );
        }}
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
