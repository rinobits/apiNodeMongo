// packages
const passport  = require('passport');
const boom      = require('@hapi/boom');
const jwt       = require('jsonwebtoken');
// imports
const {config}        = require('../../config');
const {authJwtSecret} = config;
require("../../utils/strategies/local");
require('../../utils/strategies/jwt');

localAuth = passport.authenticate('jwt', {session: false});

authGet = (req, res, next) => {
    res.json({user: req.user}); 
}
authPost = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err || !user){
            next(boom.unauthorized());
        }else{
            const token = jwt.sign(user, authJwtSecret, {expiresIn: "1h"});
            res.json({user, token});
        }
    })(req, res, next);
}
module.exports = {
    localAuth,
    authGet,
    authPost
}