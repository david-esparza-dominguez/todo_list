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
  // function(ality) for add heading button
  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">  {/* Input field to enter a new heading */}
          <input
            type="text"
            className="heading-input" // CSS clas for styling
            placeholder="Enter heading" // Text shown when input is empty
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state 
          />
          {/* Button to add entered heading to the todo list */}
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => ( // Itterate over each todo item in the todos array
              <div key ={index} className="todo-card">
                <div className="heading_todo">
                  {/* Display the heading text of the current todo item */}
                  <h3>{todo.heading}</h3> {/* Displays the headding here */}
                  {/* Button to delete the current heading by passing its index */}
                  <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}> Delete Heading </button>
                </div>
              </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
