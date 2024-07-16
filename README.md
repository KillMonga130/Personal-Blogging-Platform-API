# Blogging Platform API

This is a RESTful API for a personal blogging platform built with Fastify and MongoDB.

## Endpoints

- `GET /articles` - Retrieve all articles
- `GET /articles/:id` - Retrieve a single article by ID
- `POST /articles` - Create a new article
- `PUT /articles/:id` - Update an article
- `DELETE /articles/:id` - Delete an article

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`

Ensure MongoDB is running on `mongodb://localhost:27017/blog`.
