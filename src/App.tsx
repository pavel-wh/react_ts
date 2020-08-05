import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonAppBar from './components/AppBar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces/todo';

declare var confirm: (question: string) => boolean;

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

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
    <div className="App">
      <ButtonAppBar />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="div"
            style={{
              backgroundColor: 'transparent',
              height: `calc(100vh - 64px)`,
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              style={{ marginTop: '2rem' }}
            >
              ToDo List
            </Typography>
            <TodoForm onAdd={addHandler} />
            <TodoList
              todos={todos}
              onToggle={toggleHandler}
              onRemove={removeHandler}
            />
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
