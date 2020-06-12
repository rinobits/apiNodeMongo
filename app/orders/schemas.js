const Joi = require('@hapi/joi');

const nombre      = Joi.string().min(2).max(15);
const telefono    = Joi.string().min(8).max(15);
const email       = Joi.string().email();
const descripcion = Joi.string().allow("");
const mensaje     = Joi.string().allow("");
const valor       = Joi.number().min(1).max(1000000).allow("");

const orderSchemaCreate = Joi.object({
    nombre : nombre.required(),
    telefono,
    email:   email.when('telefono', {is: Joi.exist(), then: Joi.optional(), otherwise: Joi.required()}),
    descripcion,
    mensaje,
    valor
});

const orderSchemaUpdate = Joi.object({
    nombre,
    telefono,
    email,
    descripcion,
    mensaje,
    valor
});

module.exports = {
    orderSchemaCreate,
    orderSchemaUpdate
}