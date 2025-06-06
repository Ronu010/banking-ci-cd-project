import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowLogin(false)}>Register</button>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}
