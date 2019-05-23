import React from 'react';
import { graphql } from 'gatsby';

import Heading from '../components/Heading/Heading';

export default function ThemeSwitcherPage({ data }) {
  const { availableThemes } = data.siteData.siteMetadata;
  return (
    <>
      <Heading level={1}>Theme Switcher</Heading>
      <p>
        I can never decide what colour to make my portfolio, so I thought I'd
        let you choose!
      </p>
      <p>
        You may have noticed the theme switcher button in the top right corner
        of all pages, well this page allows some control.
      </p>
      <Heading level={2}>Choose a theme</Heading>
      {availableThemes.map(theme => (
        <button type="button">{theme}</button>
      ))}
    </>
  );
}

export const pageQuery = graphql`
  query ThemeSwitcherPage {
    siteData: site {
      siteMetadata {
        availableThemes
      }
    }
  }
`;
