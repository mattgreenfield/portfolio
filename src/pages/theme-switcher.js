import React from 'react';
import { graphql } from 'gatsby';

import Heading from 'components/Heading/Heading';
import Grid from 'components/Grid/Grid';
import ThemePickerSwatch from 'components/ThemePicker/Swatch/ThemePickerSwatch';

export default function ThemeSwitcherPage({
  data,
  onThemeChange,
  currentTheme,
}) {
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
      <Grid>
        {availableThemes.map(theme => (
          <ThemePickerSwatch
            theme={theme}
            onThemeChange={onThemeChange}
            key={theme}
            isActive={theme === currentTheme}
          />
        ))}
      </Grid>
      {/* <div>
        <label>
          <input type="checkbox" />
          Persist theme when leaving the site
        </label>
        <p>
          Please note: persisting a theme requires a cookie. If you don't like
          that, don't click it.
        </p>
      </div> */}
      <Heading level={2}>How it works</Heading>
      <p>
        The theme switcher uses CSS Custom Properties (CSS Variables) to update
        various colours across the site.
      </p>
      <p>
        When you select a new theme, the theme class is updated on the `html>`
        element and this sets new CSS variables.
      </p>
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
