import React from 'react';
import classNames from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';
import { MdInvertColors } from 'react-icons/md';

import './ThemePicker.scss';

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      options: ['default', 'red', 'pink', 'yellow', 'build'],
    };

    this.onThemeChange = this.onThemeChange.bind(this);
    this.pickRandom = this.pickRandom.bind(this);
  }

  togglePicker() {
    this.setState({ open: !this.state.open });
  }

  onThemeChange(e) {
    this.props.onThemeChange(e.target.value);
  }

  pickRandom() {
    const { theme } = this.props;
    const options = [...this.state.options];

    // Ensure the random selection is not the same as the current theme by removing it
    var currentThemeIndex = options.indexOf(theme);
    if (currentThemeIndex > -1) {
      options.splice(currentThemeIndex, 1);
    }

    const randomKey = Math.floor(Math.random() * options.length);
    this.props.onThemeChange(options[randomKey]);
  }

  render() {
    const { theme } = this.props;
    const { options } = this.state;
    return (
      <aside className="ThemePicker">
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                type="button"
                ref={ref}
                onClick={() => this.togglePicker()}
                aria-label="Change theme"
                className="ThemePicker__toggle"
              >
                {/* <span>Change theme</span> */}
                <MdInvertColors />
              </button>
            )}
          </Reference>
          <Popper placement="right">
            {({ ref, style, placement, arrowProps }) =>
              this.state.open && (
                <div
                  ref={ref}
                  className="ThemePicker__picker"
                  data-placement={placement}
                >
                  <h2>Pick a theme</h2>
                  <fieldset>
                    <div
                      className="ThemePicker__options"
                      onChange={this.onThemeChange}
                    >
                      {options.map(color => (
                        <input
                          className={classNames(
                            'theme',
                            'ThemePicker__swatch',
                            {
                              [`theme--${color}`]: true,
                              'ThemePicker__swatch--current': color === theme,
                            }
                          )}
                          type="radio"
                          name="theme"
                          value={color}
                          aria-label={color}
                          key={color}
                        />
                      ))}
                    </div>
                  </fieldset>
                  <button type="button" onClick={this.pickRandom}>
                    Feeling Lucky?
                  </button>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )
            }
          </Popper>
        </Manager>
      </aside>
    );
  }
}

export default ThemePicker;
