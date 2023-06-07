const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Subject = require('../models/subject');
const Class = require('../models/class');
const Attendance = require('../models/attendance');

router.get('/students', authenticateToken, async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/students', authenticateToken, async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    parentName: req.body.parentName,
    parentEmail: req.body.parentEmail,
    parentPhone: req.body.parentPhone,
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Implement similar endpoints for teacher, subject, class, and attendance

module.exports = router;
