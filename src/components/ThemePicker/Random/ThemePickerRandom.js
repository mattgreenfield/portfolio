import React from 'react';
import { MdInvertColors } from 'react-icons/md';
import { Link } from 'gatsby';

import './ThemePickerRandom.scss';

class ThemePickerRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };

    this.pickRandom = this.pickRandom.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetClickCount = this.resetClickCount.bind(this);
  }

  incrementCount() {
    this.setState({ clickCount: this.state.clickCount + 1 });
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

  resetClickCount() {
    this.setState({ clickCount: 0 });
  }

  handleClick() {
    this.incrementCount();
    this.pickRandom();
  }

  render() {
    const { clickCount } = this.state;
    const showPopup = clickCount > 5;

    return (
      <aside className="ThemePicker">
        <button
          type="button"
          onClick={this.handleClick}
          className="ThemePicker__toggle"
        >
          <span className="ThemePicker__toggle__text">Change Theme</span>
          <MdInvertColors />
        </button>
        {showPopup && (
          <div className="ThemePicker__popup">
            It looks like your enjoying the theme switcher. Why not check out
            the{' '}
            <Link to="/theme-switcher" onClick={this.resetClickCount}>
              full list of themes?
            </Link>{' '}
            <button type="button" onClick={this.resetClickCount}>
              No Thanks
            </button>
          </div>
        )}
      </aside>
    );
  }
}

export default ThemePickerRandom;
