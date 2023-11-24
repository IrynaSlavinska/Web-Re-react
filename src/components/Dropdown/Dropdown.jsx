import { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="DropdownToggle" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && (
          <div className="DropdownMenu">Dropdown Menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
