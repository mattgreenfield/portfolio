import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './ThemePickerSwatch.scss';

export default function ThemePickerSwatch({ theme, onThemeChange, isActive }) {
  return (
    <button
      type="button"
      onClick={() => onThemeChange(theme)}
      aria-label={`Change theme to`}
      className={classnames('ThemePickerSwatch', 'theme', [`theme--${theme}`], {
        'ThemePickerSwatch--active': isActive,
      })}
    />
  );
}

ThemePickerSwatch.propTypes = {
  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
  isActive: PropTypes.bool,
};

ThemePickerSwatch.defaultProps = {
  isActive: false,
};
