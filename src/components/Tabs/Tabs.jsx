import { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
  state = {
    activeTabIdx: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;

    const activeTab = items[activeTabIdx];

    return (
      <>
        <div className="TabsTask">
          <div className="TabsContainer">
            {items.map((item, idx) => (
              <button
                type="button"
                key={item.label}
                onClick={() => this.setActiveTabIdx(idx)}
                className="TabBtn"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div>
            <h2 className="TabLabel">{activeTab.label}</h2>
            <p className="TabContent">{activeTab.content}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Tabs;

// ! * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// import { PureComponent } from 'react';
// class Tabs extends PureComponent {
//   state = {
//     activeTabIdx: 0,
//   };

//   setActiveTabIdx = idx => {
//     this.setState({ activeTabIdx: idx });
//   };

//   render() {
//     const { activeTabIdx } = this.state;
//     const { items } = this.props;

//     const activeTab = items[activeTabIdx];

//     return (
//       <>
//         <div>
//           {items.map((item, idx) => (
//             <button
//               type="button"
//               key={item.label}
//               onClick={() => this.setActiveTabIdx(idx)}
//             >
//               {item.label}
//             </button>
//           ))}

//           <div>
//             <h2>{activeTab.label}</h2>
//             <p>{activeTab.content}</p>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Tabs;
