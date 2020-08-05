import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonAppBar from './components/AppBar';
import Container from '@material-ui/core/Container';
import Todos from './pages/Todos';
import About from './pages/About';

function App() {
  return (
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
  );
}

export default App;
