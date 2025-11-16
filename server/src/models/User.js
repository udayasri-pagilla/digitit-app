const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student','teacher'], required: true },

  // <-- FIXED: conditionally required only for students
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',                 // keep same model name you used in model export
    required: function() {
      return this.role === 'student';
    }
    // no default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
