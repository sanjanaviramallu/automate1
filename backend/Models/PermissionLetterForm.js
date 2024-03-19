// models/PermissionLetterForm.js
const mongoose = require('mongoose');

const permissionLetterFormSchema = new mongoose.Schema({
  fields: [{
    label: String,
    type: String,
    placeholder: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model('PermissionLetterForm', permissionLetterFormSchema);
