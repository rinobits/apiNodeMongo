// packages
const express                                  = require('express');
const router                                   = express.Router();
// imports                                 
const control                                  = require('./responses');
const { orderSchemaCreate, orderSchemaUpdate } = require('./schemas');
const validatorHandler                         = require('../../utils/middlewares/validatorHandler');
const verifyToken                              = require('../../utils/middlewares/verifyToken');

// developer
router.get('/', control.searchOrders());
router.get('/:id', control.searchOrderById());
// admin
router.post('/', validatorHandler(orderSchemaCreate, 'body'), verifyToken, control.createOrder());
router.put('/:id', validatorHandler(orderSchemaUpdate, 'body'), verifyToken, control.updateOrderById());
router.delete('/:id', verifyToken, control.deleteOrderById());

module.exports = router;