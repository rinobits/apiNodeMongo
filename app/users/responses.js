// packages
const jwt                       = require('jsonwebtoken');
// imports
const UserServices              = require('./services');
const userServices              = new UserServices();
const {config:{authJwtSecret}}  = require('../../config');

const searchUsers = () => {
    return (req, res, next) => {
        userServices.findUsers()
            .then(responses => res.json(responses))
            .catch(err => next(err));
    }
}
const searchUserById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.findUserById(id)
            .then(response => {
                delete response.userPassword;
                res.json({'user': response})
            })
            .catch(err => next(err));
    }
}

const createUser = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.sendStatus(403);
            }else{
                const {body} = req;
                userServices.createUser(body)
                    .then(response => res.json({id: response}))
                    .catch(err => next(err));
            }
        });
    }
}
const updateUserById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.sendStatus(403);
            }else{
                const {body} = req;
                const {id}   = req.params;
                userServices.updateUserById(id, body) // (!)
                    .then(response => res.json({id: response}))
                    .catch(err => next(err))
            }
        });
    }
}
const deleteUserById = () => {
    return (req, res, next) => {
        jwt.verify(req.token, authJwtSecret, (err, auth) => {
            if(err){
                res.sendStatus(403);
            }else{
                const {id} = req.params
                userServices.deleteUserById(id)
                    .then(response => res.json({'message' : 'user deleted'}))
                    .catch(err => {
                        res.send("Not Deleted")
                    })
            }
        });
    }
}
module.exports = {
    searchUsers,
    searchUserById,
    createUser,
    updateUserById,
    deleteUserById
};

