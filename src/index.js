import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Rules from './pages/Rules';
import { FreeGame } from './pages/FreeGame';
import { Game } from './pages/Game';
import reducers from './reducers/reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rules" element={<Rules />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/freegame" element={<FreeGame />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
