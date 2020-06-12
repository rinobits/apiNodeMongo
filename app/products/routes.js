// packages
const express = require('express');
const router  = express.Router();
// imports
const { getAllProducts, getProductsById, createProduct, updateProductById, deleteProductById } = require('./responses');
const { productSchemaCreate, productSchemaUpdate } = require('./schemas');
const validatorHandler = require('../../utils/middlewares/validatorHandler');
// developer
router.get('/', getAllProducts());
router.get('/:id', getProductsById());
// admin
router.post('/', validatorHandler(productSchemaCreate, 'body'),createProduct());
router.put('/:id', validatorHandler(productSchemaUpdate, 'body'), updateProductById());
router.delete('/:id', deleteProductById());
module.exports = router;
