// package
const jwt                       = require('jsonwebtoken');
// imports
const {config:{authJwtSecret}}  = require('../../config');
const ProductServices           = require('./services');
const productServices           = new ProductServices();

const searchProducts = () => {
    return (req, res, next) => {
        productServices.findProducts()
            .then(responses => res.json(responses))
            .catch(err => {
                res.send("Not Done")
            })
        }
}
const searchProductById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        productServices.findProductById(id)
            .then(response => {
                delete response.productPassword;
                res.json({'product': response})
            })
            .catch(err => {
                res.send("Not Done")
            })
    }
}
const createProduct = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
            }else{
                const {body} = req;
                productServices.createProduct(body)
                    .then(response => res.json({id: response}))
                    .catch(err => {
                        res.send("Not Created")
                    })
            }
        });
    }
}
const updateProductById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
            }else{
                const {body} = req;
                const {id}   = req.params;
                productServices.updateProductById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(err => {
                        res.send("Not Update")
                    })
            }
        });
    }
}
const deleteProductById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
            }else{
                const {id} = req.params
                productServices.deleteProductById(id)
                    .then(response => res.json({'message' : 'product deleted'}))
                    .catch(err => {
                        res.send("Not Deleted")
                    })
            }
        });
        }
}
module.exports = {
    searchProducts,
    searchProductById,
    createProduct,
    updateProductById,
    deleteProductById
};

