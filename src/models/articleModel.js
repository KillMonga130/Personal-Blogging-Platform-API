const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  publishedDate: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
