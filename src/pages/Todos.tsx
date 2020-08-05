import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { Context } from '../context';
import { ITodo } from '../interfaces/todo';

function Todos(todos: ITodo[]) {
  const { addHandler, toggleHandler, removeHandler, state } = useContext(
    Context
  );

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
          todos={state}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </Typography>
    </React.Fragment>
  );
}

export default Todos;
