// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
          <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
