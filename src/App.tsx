import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Libraries from './components/Libraries/Libraries';
import LibraryDetails from './components/Libraries/LibraryDetails';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container className="my-5">
        <main>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/libraries/:id">
              <LibraryDetails />
            </Route>
            <Route path="/libraries">
              <Libraries/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
}

export default App;
