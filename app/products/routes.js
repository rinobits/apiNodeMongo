// packages
const express               = require('express');
const router                = express.Router();
// imports          
const control               = require('./responses');
const validatorHandler      = require('../../utils/middlewares/validatorHandler');
const verifyToken           = require('../../utils/middlewares/verifyToken');
const { deleteProductById } = require('./responses');
const { productSchemaCreate, productSchemaUpdate } = require('./schemas');

// developer
router.get('/', control.searchProducts());
router.get('/:id', control.searchProductById());
// admin
router.post('/', validatorHandler(productSchemaCreate, 'body'),verifyToken, control.createProduct());
router.put('/:id', validatorHandler(productSchemaUpdate, 'body'),verifyToken, control.updateProductById());
router.delete('/:id', verifyToken, deleteProductById());
module.exports = router;
