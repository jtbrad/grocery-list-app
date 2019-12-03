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

  getUniqeId = () => {
    return Math.floor((1 + Math.random()) *0x10000).toString(16).substring(1);
  };

  addItem = (name) => {
    const { list } = this.state;
    const item = { name, id: this.getUniqeId(), inCart: false, }
    this.setState({ list: [...list, item] });
  };

  handleClick = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.map( item => {
        if (item.id === id) {
          return {
            ...item,
            inCart: !item.inCart
          }
        }
        return item;
      })
    });
  };

  
  render() {
    const { list } = this.state;
    
    return (
      <div>
        <ItemForm addItem={this.addItem} />
        <List name="Grocery List" items={list} itemClick={this.handleClick} />
      </div>
    );
  };
};

export default App;
