import React from 'react';
import { MdInvertColors } from 'react-icons/md';

import './ThemePicker.scss';

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.pickRandom = this.pickRandom.bind(this);
  }

  togglePicker() {
    this.setState({ open: !this.state.open });
  }

  pickRandom() {
    const { theme } = this.props;
    const options = [...this.props.availableThemes];

    // Ensure the random selection is not the same as the current theme by removing it
    var currentThemeIndex = options.indexOf(theme);
    if (currentThemeIndex > -1) {
      options.splice(currentThemeIndex, 1);
    }

    const randomKey = Math.floor(Math.random() * options.length);
    this.props.onThemeChange(options[randomKey]);
  }

  render() {
    return (
      <aside className="ThemePicker">
        <button
          type="button"
          onClick={this.pickRandom}
          aria-label="Change theme"
          className="ThemePicker__toggle"
        >
          <span className="ThemePicker__toggle__text">Change Theme</span>
          <MdInvertColors />
        </button>
      </aside>
    );
  }
}

export default ThemePicker;
