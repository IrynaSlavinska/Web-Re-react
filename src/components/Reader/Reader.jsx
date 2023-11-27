import { Component } from 'react';

import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';

const LS_KEY = 'reader_item_index';

class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  //   onPrev = () => {
  //     this.setState(state => ({ index: state.index - 1 }));
  //   };
  //   onNext = () => {
  //     this.setState(state => ({ index: state.index + 1 }));
  //   };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const TotalItems = items.length;
    const currentItem = items[index];
    return (
      <div>
        <Controls
          index={index + 1}
          TotalItems={TotalItems}
          changeIndex={this.changeIndex}
        />

        <Progress index={index + 1} TotalItems={TotalItems} />

        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}

export default Reader;
