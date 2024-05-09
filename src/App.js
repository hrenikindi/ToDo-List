import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
      editIndex: null,
    };
  }

  handleAddTodo = () => {
    const { inputValue, editIndex, todos } = this.state;
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        this.setState({
          todos: updatedTodos,
          editIndex: null,
          inputValue: "",
        });
      } else {
        this.setState({
          todos: [...todos, inputValue],
          inputValue: "",
        });
      }
    }
  };

  handleDeleteTodo = (index) => {
    const newTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: newTodos });
  };

  handleEditTodo = (index) => {
    this.setState({
      inputValue: this.state.todos[index],
      editIndex: index,
    });
  };

  render() {
    const { todos, inputValue, editIndex } = this.state;
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          placeholder="Add a task"
        />
        <button onClick={this.handleAddTodo}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.handleEditTodo(index)}>Edit</button>
              <button onClick={() => this.handleDeleteTodo(index)}>
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
