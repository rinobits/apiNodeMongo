// package
const jwt                       = require('jsonwebtoken');
// imports
const {config:{authJwtSecret}}  = require('../../config');
const OrderServices = require('./services');
const orderServices = new OrderServices();
const searchOrders = () => {
    return (req, res, next) => {
        orderServices.findOrders()
            .then(responses => res.json(responses))
            .catch(err => {
                res.send("Not Done")
            })    }
}
const searchOrderById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        orderServices.findOrderById(id)
            .then(response => {
                delete response.orderPassword;
                res.json({'order': response})
            })
            .catch(err => {
                res.send("Not Done")
            })    }
}
const createOrder = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
            }else{
                const {body} = req;
                orderServices.createOrder(body)
                    .then(response => res.json({id: response}))
                    .catch(err => {
                        res.send("Not Created")
                    })
            }
        });
        }
}
const updateOrderById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
            }else{
                const {body} = req;
                const {id}   = req.params;
                orderServices.updateOrderById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(err => {
                        res.send("Not Updated")
                    })
            }
        });
        }
}
const deleteOrderById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
            }else{
                const {id} = req.params
                orderServices.deleteOrderById(id)
                    .then(response => res.json({'message' : 'order deleted'}))
                    .catch(err => {
                        res.send("Not Deleted")
                    })
            }
        });
    }
}
module.exports = {
    searchOrders,
    searchOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById};

