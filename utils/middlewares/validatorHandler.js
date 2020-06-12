const Joi = require('@hapi/joi');
const boom = require('@hapi/boom');
const validate = (data, schema)  => {
    return schema.validate(data);
}
const setValues = (values, data, req, next) => {
    req[data] = values;
    next();
}
const validatorHandler = (schema, data = 'body') => {
    return (req, res, next) => {
        const response = validate(req[data], schema);
        response.error?next(boom.badRequest(response.error)):setValues(response.value, data, req, next);
    }
}
module.exports = validatorHandler;