import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [page, setPage] = useState('login');

  useEffect(() => {
    if (user && token) setPage('dashboard');
  }, [user, token]);

  function handleLogin({ user, token }) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setUser(user);
    setToken(token);
    setPage('dashboard');
  }

  function handleLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    setPage('login');
  }

  return (
    <div className="app">
      <header>
        <h1>DigitIt Task Manager</h1>
        {user && <button onClick={handleLogout}>Logout</button>}
      </header>
      <main>
        {!user && page === 'login' && <Login onSuccess={handleLogin} switchToSignup={() => setPage('signup')} />}
        {!user && page === 'signup' && <Signup switchToLogin={() => setPage('login')} />}
        {user && token && <Dashboard user={user} token={token} />}
      </main>
    </div>
  );
}
