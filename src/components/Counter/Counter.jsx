import { Component } from 'react';
import './Counter.css';
import Controls from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // ! this.state.value = 6;  напряму по посиланню змінювати не можна!!!!!!!
    //   this.setState({ value: 10 }); якщо нам не потрібно попередній стан об'єкта
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="CounterValue">{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="CounterContols">
          <button
            type="button"
            onClick={this.handleIncrement}
            className="CounterBtn"
          >
            Increase
          </button>
          <button
            type="button"
            onClick={this.handleDecrement}
            className="CounterBtn"
          >
            Decrease
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
