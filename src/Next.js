import React, { Component } from 'react';
import './App.css';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = [1, 2];

class Next extends Component {

  state = { value: 0, previous: 0 };
  
  render() { 
    return (
      <div className="App-step">
        <div style={{ width: '40%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={ VALUES } />
        </div>
      </div>
    );
  }
}


export default Next;


