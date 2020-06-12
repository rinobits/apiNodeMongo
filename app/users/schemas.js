const Joi = require('@hapi/joi');

const username = Joi.string().min(3).max(30);
const password = Joi.string().min(8).max(40).lowercase(1).uppercase(1);

const userSchemaCreate = Joi.object({
    username: username.required(),
    password: password.required()
})

const userSchemaUpdate = Joi.object({
    username,
    password
});

module.exports = {
    userSchemaCreate,
    userSchemaUpdate
}