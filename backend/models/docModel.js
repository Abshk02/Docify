const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhishekkumar75149:abshk02@docify.s5y3t1b.mongodb.net/");

const docSchema = mongoose.Schema({
  title: String,
  content: {
    type: String,
    default: ""
  },
  uploadedBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', docSchema);
