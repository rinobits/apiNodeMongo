const jwt                       = require('jsonwebtoken');
const {config:{authJwtSecret}}  = require('../../config');


module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader != undefined){ // get boom
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}


