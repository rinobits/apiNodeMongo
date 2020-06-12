// packages
const express   = require('express');
const router    = express.Router();
// imports & cons
const control   = require('./responses');
const { userSchemaCreate, userSchemaUpdate } = require("./schemas");
const validatorHandler = require('../../utils/middlewares/validatorHandler');
require('../../utils/strategies/jwt');

// developer
router.get('/', control.searchUsers());
router.get('/:id', control.searchUserById());
// admin
router.post('/', validatorHandler(userSchemaCreate, 'body'), /* control.localAuth, */ control.createUser());
router.put('/:id', validatorHandler(userSchemaUpdate, 'body'), control.localAuth, control.updateUserById());
router.delete('/:id'/* , control.localAuth */, control.deleteUserById());
module.exports = router;

/**
 * 5ee2b3dbcd9707e7813a7e8a
 */