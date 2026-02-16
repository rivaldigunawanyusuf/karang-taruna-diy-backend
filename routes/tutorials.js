const express = require('express');
const Tutorial = require('../models/Tutorial');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Semua route di bawah ini memerlukan autentikasi
router.use(authMiddleware);

// GET /api/tutorials — Ambil semua tutorial
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find().sort({ createdAt: -1 });
    res.json(tutorials);
  } catch (error) {
    console.error('Get tutorials error:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
});

// GET /api/tutorials/:id — Ambil detail tutorial
router.get('/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ message: 'Tutorial tidak ditemukan.' });
    }
    res.json(tutorial);
  } catch (error) {
    console.error('Get tutorial detail error:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
});

module.exports = router;
