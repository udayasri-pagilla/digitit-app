import React, { useState } from 'react';
import { request } from '../api';

export default function Login({ onSuccess, switchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setError(null);
    try {
      const data = await request('/auth/login', { method: 'POST', body: { email, password } });
      onSuccess({ user: data.user, token: data.token });
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
        <button type="submit">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
      <p>Don't have an account? <button onClick={switchToSignup} className="link">Sign up</button></p>
    </div>
  );
}
