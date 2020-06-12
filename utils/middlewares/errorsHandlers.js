
const boom = require('@hapi/boom');
const {config} = require('../../config');
const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
}
const wrapError = (err, req, res, next) => {
        if(!err.isBoom){
            next(boom.badImplementation(err));
        }
        next(err);
}
const withErrorStack = (err, stack) => {
    if(config.dev){
        return {error: err, stack}
    }
    return {error: err}
}
const errorHandler = (err, req, res, next) => {
    const {output: {statusCode, payload}} = err;
    res.status(statusCode).json(withErrorStack(payload, err.stack));
}
module.exports = {
    logError,
    wrapError,
    errorHandler
}
