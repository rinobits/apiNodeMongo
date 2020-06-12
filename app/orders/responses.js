// packages
const passport = require('passport');
require('../../utils/strategies/jwt');
// imports & consts
const CategoryServices = require('./services');
const categoryServices = new CategoryServices();

// Orders
const createOrder = () => {
    return (req, res, next) => {
        const {body} = req;
        categoryServices.create(body)
        .then(response => res.json({id: response}))
        .catch(err => next(err));
    }
}
const getAllOrders = () => {
    return (req, res, next) =>  {
        categoryServices.getAll()
        .then(responses => res.json(responses))
        .catch(err => next(err));
    }
}
const getOrdersById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        categoryServices.getById(id)
        .then(response => res.json(response))
        .catch(err => next(err));
    }
}
const updateOrderById = () => {
    return (req, res, next) => {
        const {body} = req; 
        const {id}   = req.params;
        categoryServices.updateById(id, body)
        .then(response => res.json({id: response}))
        .catch(err => next(err));
    }
}
const deleteOrderById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        categoryServices.deleteById(id)
        .then(response => res.json({'message' : 'ok'}))
        .catch(err => next(err));
    }
}

const jwtAuth = passport.authenticate('jwt', {session:false});
module.exports = {
    getAllOrders,
    getOrdersById,
    updateOrderById,
    deleteOrderById,
    createOrder,
    jwtAuth
}