import React from 'react';
import classNames from 'classnames';
import { Manager, Reference, Popper } from 'react-popper';

import './ThemePicker.scss';

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.onThemeChange = this.onThemeChange.bind(this);
  }

  togglePicker() {
    this.setState({ open: !this.state.open });
  }

  onThemeChange(e) {
    this.props.onThemeChange(e.target.value);
  }

  render() {
    const theme = this.props.theme;
    const options = ['default', 'red', 'pink', 'yellow', 'build'];
    return (
      <aside className="ThemePicker">
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                type="button"
                ref={ref}
                onClick={() => this.togglePicker()}
              >
                Change theme
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
                  Pick a theme
                  <fieldset onChange={this.onThemeChange}>
                    {options.map(color => (
                      <input
                        className={classNames('theme', 'ThemePicker__swatch', {
                          [`theme--${color}`]: true,
                          'ThemePicker__swatch--current': color === theme,
                        })}
                        type="radio"
                        name="theme"
                        value={color}
                      />
                    ))}
                  </fieldset>
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
