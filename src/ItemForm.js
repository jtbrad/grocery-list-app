import React from 'react';

class ItemForm extends React.Component {

  state = {name: ""};

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add An Item"
        />
      </form>
    );
  };
};

export default ItemForm;