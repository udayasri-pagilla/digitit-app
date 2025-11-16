# 🌟 DigitIt Learning Task Manager (MERN Stack)
A professional Teacher–Student task management system built using the **MERN stack**, featuring **role-based access**, **clean UI**, **smooth UX**, and **full CRUD functionality**.

---

## 🚀 Overview
DigitIt Task Manager is designed for learning environments where **teachers assign tasks** and **students track their progress**.  
It demonstrates end-to-end full-stack capabilities including:

✔ Secure authentication  
✔ Role-based authorization  
✔ Teacher–Student mapping  
✔ Task progress tracking  
✔ Professional dashboard UI  
✔ Modern frontend structure  

Built as a job-ready take-home project to showcase full-stack skills.

---

## 🎯 Key Features

### 👩‍🏫 Teacher
- Create tasks  
- View tasks of all assigned students  
- Filter tasks by progress  
- Edit or delete their own tasks  
- Track students’ overall progress  

### 👩‍🎓 Student
- View only their own tasks  
- See their assigned teacher information  
- Update task progress  
- Clean and simple dashboard  

### 🔐 Authentication & Security
- JWT authentication  
- Encrypted passwords (bcrypt)  
- Full role-based access protection  
- Students must enter teacher ID or teacher email during signup  

### 🎨 UI/UX Highlights
- Clean **light theme** (best for demo videos)  
- Sidebar layout like a real SaaS dashboard  
- Smooth CSS-based animations  
- Balanced spacing and modern cards  
- Fully responsive  

---

## 🛠️ Tech Stack

### Frontend
- React 18  
- Vite  
- Pure CSS (no Tailwind)  
- Reusable components  

### Backend
- Node.js  
- Express.js  
- JWT Authentication  
- Mongoose  

### Database
- MongoDB  
- Models: `User`, `Task`

---

## 📁 Folder Structure
```
digitit-app/
 ├── server/
 │   ├── src/
 │   │   ├── models/
 │   │   ├── controllers/
 │   │   ├── routes/
 │   │   └── middleware/
 │   └── package.json
 │
 └── client/
     ├── src/
     │   ├── pages/
     │   ├── shared/
     │   ├── App.jsx
     │   ├── styles.css
     │   └── main.jsx
     └── package.json
```

---

## ⚙️ How to Run the Project

### ▶ Backend Setup
```bash
cd server
npm install
```

Create **.env** file:
```
PORT=4000
MONGO_URI=mongodb://localhost:27017/digitit
JWT_SECRET=mysecretkey
JWT_EXPIRES_IN=7d
`
```bash
cd ../client
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 🔑 Demo Accounts (from seeding)

### Teacher
```
Email: teacherA@example.com
Password: Pass1234
```

### Students
```
Email: studentX@example.com
Password: Pass1234
```
```
Email: studentY@example.com
Password: Pass1234
```

---

## 📸 Screenshots (Add After Recording Demo)
- Login Page  
- Signup Page  
- Teacher Dashboard  
- Student Dashboard  

---

## 🧠 Why This Project Stands Out
- Clean architecture  
- Professional UI  
- Real-world problem (teacher–student workflow)  
- Fully secure role-based backend  
- Reusable frontend components  
- Smooth animations + modern layout  
- Industry-standard MERN stack  

Perfect for:
- Portfolio  
- Technical interviews  
- Take-home assignments  
- Hackathons  

---

## 📽 Video Script (Short Version)
“Hi, I'm Udayasri. This is my DigitIt Task Manager built with the MERN stack.  
It features secure authentication, teacher–student roles, task creation, progress tracking, filtering, and a professional responsive UI.  
Teachers can assign tasks and track students, while students can manage their own tasks.  
The backend uses Node, Express, JWT, and MongoDB.  
The frontend uses React + Vite with a clean dashboard UI.  
This project shows my ability to build real-world full-stack applications with strong architecture and polished UI.”

---

## 🤝 Contact  
**Udayasri**  
Full Stack Developer  
📧 udayasripagilla1873@gmail.com  
🔗 GitHub: https://github.com/udayasri-pagilla/digitit-app  
🔗 LinkedIn: https://www.linkedin.com/in/udayasri-pagilla-253633257/
---

## ⭐ If you like this project, please star the repo!