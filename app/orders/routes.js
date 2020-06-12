// packages
const express = require('express');
const router  = express.Router();
// imports
const control = require('./responses');
const { orderSchemaCreate, orderSchemaUpdate } = require('./schemas');
const validatorHandler = require('../../utils/middlewares/validatorHandler');
require('../../utils/strategies/jwt');
// developer
router.get('/', control.getAllOrders());
router.get('/:id', control.getOrdersById());
// admin -----------------------------=> CORREGIR
router.post('/', validatorHandler(orderSchemaCreate, 'body'), control.jwtAuth, control.createOrder());
router.put('/:id', validatorHandler(orderSchemaUpdate, 'body'), control.jwtAuth, control.updateOrderById());
router.delete('/:id', control.jwtAuth, control.deleteOrderById());

module.exports = router;