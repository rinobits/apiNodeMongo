const Joi = require('@hapi/joi');
const orderSchema = Joi.object({
    nombre: Joi.string()
        .min(2)
        .max(15)
        .required(),
    telefono: Joi.string() //.when('email', {is: Joi.email(), then: Joi.optional(), otherwise: Joi.required()}) (!)
        .min(8)
        .max(15)
        .required(),
    email: Joi.string().email()
        .required(),
    descripcion: Joi.string()
        .allow(""),
    mensaje: Joi.string()
        .allow(""),
    valor:  Joi.number()
        .min(1)
        .max(1000000)
        .allow(""),
        //.precision(x)
    //url: Joi.string().uri(),
    //joiBoolean: Joi.boolean()

});

console.log(orderSchema.validate({nombre:"Miguel", telefono:"12345678", email:"sads@ads.com", descripcion: "", joiBoolean: true}));

