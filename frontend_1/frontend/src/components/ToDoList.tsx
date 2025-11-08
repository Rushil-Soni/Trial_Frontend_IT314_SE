import React, { useState } from 'react';
import '../styles.css';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export default function ToDoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Charge Satellite Phone', completed: true },
    { id: '2', text: 'Secure Water Supply (3 Days)', completed: false },
    { id: '3', text: 'Check-in with Family', completed: false },
    { id: '4', text: 'First Aid Kit Inventory', completed: false },
  ]);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addNewTask = () => {
    const newTask = prompt('Enter new task:');
    if (newTask && newTask.trim()) {
      setTodos([...todos, {
        id: Math.random().toString(36).slice(2),
        text: newTask.trim(),
        completed: false
      }]);
    }
  };

  return (
    <div>
      <div className="section-header">
        <span>TO-DO LIST</span>
      </div>
      <div className="section-content">
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'todo-checked' : ''}>
                {todo.completed ? '✔' : '☐'} {todo.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="add-task" onClick={addNewTask}>
          <span>Add New Task</span>
          <svg className="add-task-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

