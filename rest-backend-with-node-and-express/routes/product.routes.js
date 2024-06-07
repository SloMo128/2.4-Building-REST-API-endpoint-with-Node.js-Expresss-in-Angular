const express = require('express');
const productRoute = express.Router();
const products = require('../controllers/product.controller.js');

// Retrieve all Product
productRoute.get('/readall', products.findAll);

// Retrieve a single product with "nome" as request param
productRoute.get('/read/:nome', products.findByName);

// Create a new Product
productRoute.post('/create', products.create);

// Update a Product wtih a specific productId
productRoute.put('/update', products.update);

// Create a Product wtih a specific productId
productRoute.delete('/delete', products.delete);

module.exports = productRoute;

