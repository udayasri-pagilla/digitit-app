import React, { useEffect, useState } from 'react';
import { request } from '../api';
import TaskForm from '../shared/TaskForm';

export default function Dashboard({ user, token }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true); setError(null);
    try {
      const data = await request('/tasks', { token });
      setTasks(data.tasks);
    } catch (err) {
      setError(err.message || 'Failed to load');
    } finally { setLoading(false); }
  }

  useEffect(()=>{ load(); }, []);

  async function createTask(payload) {
    try {
      const data = await request('/tasks', { method: 'POST', token, body: payload });
      setTasks(prev=>[data.task, ...prev]);
    } catch (err) { alert(err.message || 'Create failed'); }
  }

  async function updateTask(id, payload) {
    try {
      const data = await request(`/tasks/${id}`, { method: 'PUT', token, body: payload });
      setTasks(prev=>prev.map(t=>t._id===id?data.task:t));
    } catch (err) { alert(err.message || 'Update failed'); }
  }

  async function deleteTask(id) {
    if (!confirm('Delete this task?')) return;
    try {
      await request(`/tasks/${id}`, { method: 'DELETE', token });
      setTasks(prev=>prev.filter(t=>t._1d!==id && t._id!==id));
    } catch (err) { alert(err.message || 'Delete failed'); }
  }

  return (
    <div>
      <h2>Welcome, {user.email} ({user.role})</h2>
      <TaskForm onSubmit={createTask} />
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="tasks">
        {tasks.length===0 && <p>No tasks yet.</p>}
        {tasks.map(t=>(
          <div key={t._id} className="task">
            <h3>{t.title}</h3>
            <p>{t.description}</p>
            <p>By: {t.userId?.email || 'Unknown'}</p>
            <p>Progress: {t.progress}</p>
            <p>Due: {t.dueDate ? new Date(t.dueDate).toLocaleString() : '—'}</p>
            {t.userId && t.userId._id === user.id && (
              <div className="actions">
                <button onClick={()=>{ const p = prompt('New title', t.title); if (p) updateTask(t._id, { title: p }); }}>Edit</button>
                <button onClick={()=>deleteTask(t._1d || t._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
