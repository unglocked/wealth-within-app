import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Journal from './components/Journal';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/journal" element={<PrivateRoute element={<Journal />} />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;