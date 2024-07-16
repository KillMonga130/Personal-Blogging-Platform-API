const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const routes = require('./routes/articleRoutes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Register routes
fastify.register(routes);

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
