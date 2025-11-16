import React, { useState } from 'react';
import { request } from '../api';

export default function Signup({ switchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [teacherId, setTeacherId] = useState('');
  const [msg, setMsg] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setMsg(null);
    try {
      await request('/auth/signup', { method: 'POST', body: { email, password, role, teacherId: role === 'student' ? teacherId : undefined }});
      setMsg('Signup successful — please login');
    } catch (err) {
      setMsg(err.message || 'Signup failed');
    }
  }

  return (
    <div className="card">
      <h2>Signup</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
        <div>
          <label><input type="radio" checked={role==='student'} onChange={()=>setRole('student')} /> Student</label>
          <label><input type="radio" checked={role==='teacher'} onChange={()=>setRole('teacher')} /> Teacher</label>
        </div>
        {role==='student' && <input value={teacherId} onChange={e=>setTeacherId(e.target.value)} placeholder="teacherId (paste teacher _id here)" />}
        <button type="submit">Signup</button>
      </form>
      {msg && <div className="info">{msg}</div>}
      <p>Already have an account? <button onClick={switchToLogin} className="link">Login</button></p>
    </div>
  );
}
