const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  duree: { type: Number, required: true },
  type: { type: String, required: true },
  psychologue: { type: mongoose.Schema.Types.ObjectId, ref: 'Psychologue', required: true },
  etudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'Etudiant', required: true },
//   idEtudiant: { type: mongoose.Schema.Types.ObjectId, ref: 'etudiant', required: true }
});

module.exports = mongoose.model('Consultation', consultationSchema);
