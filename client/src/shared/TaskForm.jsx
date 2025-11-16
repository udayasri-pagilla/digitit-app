import React, { useState } from 'react';

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!title) return alert('Title required');
    onSubmit({ title, description, dueDate: dueDate ? new Date(dueDate).toISOString() : null });
    setTitle(''); setDescription(''); setDueDate('');
  }

  return (
    <form onSubmit={submit} className="task-form">
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={e=>setDueDate(e.target.value)} />
      <button type="submit">Create Task</button>
    </form>
  );
}
