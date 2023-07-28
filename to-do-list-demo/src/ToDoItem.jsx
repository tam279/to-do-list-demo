// ToDoItem.jsx
import React from 'react';

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      item: ''
    };
  }

  handleEdit = () => {
    this.setState({
      isEditing: true,
      item: this.props.item
    });
  }

  handleSave = () => {
    this.props.updateItem(this.state.item);
    this.setState({
      isEditing: false,
      item: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  }

  render() {
    return (
      <li>
        {this.state.isEditing ? 
        <div>
          <input type="text" value={this.state.item} onChange={this.handleChange} />
          <button onClick={this.handleSave}>Save</button>
        </div> 
        : 
        <div>
            {this.props.item}
         <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.props.deleteItem}>Delete</button>
        </div>
        }
      </li>
    );
  }
}

export default ToDoItem;
