const boom             = require('@hapi/boom');
const CategoryServices = require('./services');
const categoryServices = new CategoryServices();
// Products
const createProduct = () => {
    return (req, res, next) => {
        const {body} = req;
        categoryServices.create(body)
        .then(response => res.json({id: response}))
        .catch(err => next(err));
    }
}
const getAllProducts = () => {
    return (req, res, next) =>  {
        categoryServices.getAll()
        .then(responses => res.json(responses))
        .catch(err => next(err));
    }
}
const getProductsById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        categoryServices.getById(id)
        .then(response => res.json(response))
        .catch(err => next(err));
    }
}
const updateProductById = () => {
    return (req, res, next) => {
        const {body} = req; 
        const {id}   = req.params;
        categoryServices.updateById(id, body)
        .then(response => res.json({id: response}))
        .catch(err => next(err));
    }
}
const deleteProductById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        categoryServices.deleteById(id)
        .then(response => res.json({'message' : 'ok'}))
        .catch(err => next(err));
    }
}
module.exports = {
    getAllProducts,
    getProductsById,
    updateProductById,
    deleteProductById,
    createProduct
}