import React, { Component } from 'react';
import './App.css';

// for below execution we consider key as task node and values as Subtasks 
// Initally we assume current task as node second.  

const nodes = [{0: [1,2,3,4]}, {1: [1,2]}, {2: [1,2]}]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask:2,
      currentSubTask: 1
    }
  }

  render() {
    let markup = '';
    markup = (
      <figure className="timeline--inner">              
        { nodes.map((node, value) => {
          let values = node[value]
          values.unshift(0)
          return (this.state.currentTask === value) ?  
            (values.map(child=> {
              const classlist = (this.state.currentTask === value) && (this.state.currentSubTask === child) ? "timeline--inner-pin is-normal complete active" : "timeline--inner-pin is-normal complete"
                return <i className={child > 0 ? classlist : "timeline--inner-pin is-featured active" } data-title="Featured Pin"></i>
              }, this)                         
            ) : (<i className="timeline--inner-pin is-featured" data-title="Featured Pin"></i>) 
        }, this)}
      </figure>    
    )

    return (
      <div className="App">
        <section className="container">
          <header>
          </header>
          <section className="timeline">
            {markup}
          </section>
        </section>
      </div>
    );
  }
}

export default App;


