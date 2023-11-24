import { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPickerOption'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPickerOption-active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPickerTitle">Color Picker</h2>
        <p className="ColorPickerChoosed">Color choosed: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                style={{
                  backgroundColor: color,
                }}
                className={this.makeOptionClassName(index)}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
