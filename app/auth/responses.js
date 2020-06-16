// packages
const jwt                       = require('jsonwebtoken');
// imports
const {config:{authJwtSecret}}  = require('../../config');
const Auth                      = require('./services');

const login = (req, res) => {
    Auth(req.body.userName, req.body.userPassword)
        .then(r => res.json({response : r}))
        .catch(e => res.json({error: e}));
}
module.exports = {
    login
}