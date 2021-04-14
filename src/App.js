import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './app.scss';
import Navigation from './components/Navigation';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
