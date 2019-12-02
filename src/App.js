import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    list: [
      { id: 1, name: "Apples", inCart: true, },
      { id: 2, name: "Tomatos", inCart: false, },
      { id: 3, name: "Milk", inCart: false, },
    ]
  };

  renderList = () => {
    const { list,  } = this.state;
    return list.map( item => 
      <li key={item.id}>{ item.name }</li>
    );
  };
  
  render() {
    return (
      <div>
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  };
};

export default App;
