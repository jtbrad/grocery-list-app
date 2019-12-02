import React, {Component} from 'react';
import ItemForm from './ItemForm';
import List from './List';
import './App.css';

class App extends Component {
  state = {
    list: [
      { id: 1, name: "Apples", inCart: true, },
      { id: 2, name: "Tomatos", inCart: false, },
      { id: 3, name: "Milk", inCart: false, },
    ]
  };
  
  render() {
    const { list } = this.state;
    
    return (
      <div>
        <ItemForm />
        <List name="Grocery List" items={list} />
      </div>
    );
  };
};

export default App;
