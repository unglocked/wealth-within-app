import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Journal from './components/Journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/journal" element={<PrivateRoute component={Journal} />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;