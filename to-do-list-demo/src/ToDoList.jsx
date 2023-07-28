// ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      currentItem: event.target.value,
    });
  }
  addItem = () => {
    this.setState((prevState) => ({
      items: [...prevState.items, prevState.currentItem],
      currentItem: '',
    }));
  }

  updateItem = (index, newItem) => {
    const { items } = this.state;
    let newItems = [...items];
    newItems[index] = newItem;
    this.setState({
      items: newItems,
    });
  }

  deleteItem = (index) => {
    const { items } = this.state;
    this.setState({
      items: items.filter((item, itemIndex) => itemIndex !== index),
    });
  }

  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <input type="text" value={this.state.currentItem} onChange={this.handleChange} />
        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {this.state.items.map((item, index) => (
            <ToDoItem 
              key={index} 
              item={item} 
              deleteItem={() => this.deleteItem(index)} 
              updateItem={this.updateItem.bind(this, index)} 
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
