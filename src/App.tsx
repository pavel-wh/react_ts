import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonAppBar from './components/AppBar';
import Container from '@material-ui/core/Container';
import Todos from './pages/Todos';
import About from './pages/About';
import { Context } from './context';
import reducer from './reducer';

declare var confirm: (question: string) => boolean;

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const addHandler = (title: string) => {
    dispatch({
      type: 'add',
      payload: title,
    });
  };

  const toggleHandler = (id: number) => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to remove the item?');
    if (shouldRemove) {
      dispatch({
        type: 'remove',
        payload: id,
      });
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        addHandler,
        toggleHandler,
        removeHandler,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <ButtonAppBar />
          <Container maxWidth="lg">
            <Switch>
              <Route component={Todos} path="/" exact />
              <Route component={About} path="/about" />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
