import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  
  // Initializing the following three states
  // todos: To represent an array of todo items. Initialized with an empty array [], indicating that there are no todo items initially.
  const [todos, setTodos] = useState([]);
  // headingInput: To represent the value entered by user into an input field for adding a new heading for a todo item. Initialized as an empty string ''.
  const [headingInput, setheadingInput] = useState('');
  // listInputs: Initialize listInputs as an empty object {}. This state will hold the value of input fields for each todo item individually.
  const [listInputs, setlistInputs] = useState({});

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
