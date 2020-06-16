const Joi              = require('@hapi/joi');
 
const pattern          = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,32}/;
const userName         = Joi.string().min(3).max(30);
const userPassword     = Joi.string().regex(pattern).min(8).max(32);

const userSchemaCreate = Joi.object({
    userName: userName.required(),
    userPassword: userPassword.required()
})

const userSchemaUpdate = Joi.object({
    userName,
    userPassword
});

module.exports = {
    userSchemaCreate,
    userSchemaUpdate
}