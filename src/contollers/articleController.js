const Article = require('../models/articleModel');

// Get all articles
const getArticles = async (request, reply) => {
  const articles = await Article.find();
  reply.send(articles);
};

// Get a single article by ID
const getArticleById = async (request, reply) => {
  const article = await Article.findById(request.params.id);
  if (!article) {
    return reply.status(404).send({ message: 'Article not found' });
  }
  reply.send(article);
};

// Create a new article
const createArticle = async (request, reply) => {
  const newArticle = new Article(request.body);
  await newArticle.save();
  reply.status(201).send(newArticle);
};

// Update an article
const updateArticle = async (request, reply) => {
  const article = await Article.findByIdAndUpdate(request.params.id, request.body, { new: true });
  if (!article) {
    return reply.status(404).send({ message: 'Article not found' });
  }
  reply.send(article);
};

// Delete an article
const deleteArticle = async (request, reply) => {
  const article = await Article.findByIdAndDelete(request.params.id);
  if (!article) {
    return reply.status(404).send({ message: 'Article not found' });
  }
  reply.send({ message: 'Article deleted successfully' });
};

module.exports = { getArticles, getArticleById, createArticle, updateArticle, deleteArticle };
