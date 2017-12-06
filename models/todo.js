const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['Completed', 'Pending'], default: 'Pending' },
  completedOn: Date
});

const model = mongoose.model('Todo', todoSchema);

module.exports = model;
