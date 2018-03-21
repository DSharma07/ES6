import React, { Component } from 'react';
import './App.css';
import arr1 from './data/person';
import arr2 from './data/person.1';


class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredMembers: []
    }
  }

  componentWillMount() {
    try {
      const mergeDuplicateData = (p, ...arrs) => [].concat(...arrs).reduce((a, b) => !a.filter(c => b[p] === c[p]).length ? [...a, b] : a, []);
      const members = mergeDuplicateData('id', arr1, arr2)
      const filteredMembers = members.filter(mem => mem.age > 30);
      this.setState({filteredMembers});
    } catch (err) {
        console.error(err);
    }
}

  render() {
        return (
          <div className="App">
          <h2>Merge and Filter Data</h2>
          <dl>
          {this.state.filteredMembers.map(member => {
              return ( <div key={member.id}>
                  <dt>{member.username} {member.age}</dt>
                  <hr></hr>
                 </div>
                )
              })
          }
       </dl>
       </div>
        )
    
  }
}


export default App;
