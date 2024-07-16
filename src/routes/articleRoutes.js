const { getArticles, getArticleById, createArticle, updateArticle, deleteArticle } = require('../controllers/articleController');

const routes = async (fastify) => {
  fastify.get('/articles', getArticles);
  fastify.get('/articles/:id', getArticleById);
  fastify.post('/articles', createArticle);
  fastify.put('/articles/:id', updateArticle);
  fastify.delete('/articles/:id', deleteArticle);
};

module.exports = routes;
