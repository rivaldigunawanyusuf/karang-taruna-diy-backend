const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul wajib diisi'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Deskripsi wajib diisi'],
    },
    content: {
      type: String,
      required: [true, 'Konten wajib diisi'],
    },
    type: {
      type: String,
      enum: ['video', 'text'],
      default: 'text',
    },
    videoUrl: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tutorial', tutorialSchema);
