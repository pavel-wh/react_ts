import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces/todo';

declare var confirm: (question: string) => boolean;

function Todos() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to remove the item?');
    if (shouldRemove) {
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <Typography
        component="div"
        style={{
          backgroundColor: 'transparent',
          height: `calc(100vh - 64px)`,
        }}
      >
        <Typography variant="h3" component="h2" style={{ marginTop: '2rem' }}>
          ToDo List
        </Typography>
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </Typography>
    </React.Fragment>
  );
}

export default Todos;
