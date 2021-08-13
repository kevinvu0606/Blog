const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
    // unique to make sure no repeating URLs
    // done here so we dont have to re-calculate everytime
  },
  sanitiziedHtml: {
    type: String,
    required: true
  }
})

module.exports = articleSchema