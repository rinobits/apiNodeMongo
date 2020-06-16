// packages
const express    = require('express');

// imports & consts 
const orders     = require('../app/orders/routes');
const products   = require('../app/products/routes');
const auth       = require('../app/auth/routes');
const user       = require('../app/users/routes');

const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/orders', orders);
    router.use('/products', products);
    router.use('/auth', auth);
    router.use('/users', user);
}
module.exports = index;
