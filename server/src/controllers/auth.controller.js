const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function signup(req, res, next) {
  try {
    const { email, password, role, teacherId } = req.validated;

    if (role === 'student' && !teacherId) {
      const err = new Error('student must include teacherId');
      err.status = 400;
      return next(err);
    }

    if (role === 'student') {
      const teacher = await User.findById(teacherId);
      if (!teacher || teacher.role !== 'teacher') {
        const err = new Error('teacherId invalid');
        err.status = 400;
        return next(err);
      }
    }

    const existing = await User.findOne({ email });
    if (existing) {
      const err = new Error('Email already registered');
      err.status = 400;
      return next(err);
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash, role, teacherId: teacherId || null });

    res.status(201).json({
      success: true,
      user: { id: user._id, email: user.email, role: user.role, teacherId: user.teacherId }
    });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.validated;
    const user = await User.findOne({ email });
    if (!user) {
      const err = new Error('Invalid credentials');
      err.status = 401;
      return next(err);
    }
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      const err = new Error('Invalid credentials');
      err.status = 401;
      return next(err);
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
    res.json({
      success: true,
      token,
      user: { id: user._id, email: user.email, role: user.role, teacherId: user.teacherId }
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, login };
