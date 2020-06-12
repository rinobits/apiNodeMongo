// packages
const Joi         = require('@hapi/joi');


const nombre      = Joi.string().min(2).max(15);
const categoria   = Joi.string().min(3).max(20).allow("");
const valor       = Joi.number().min(1).max(1000000).allow("");
const valorOferta = Joi.number().min(1).max(999999).allow("");

const productSchemaCreate = Joi.object({
    nombre :   nombre.required(),
    caregoria: categoria.required(),
    valor:     valor.required(),
    valorOferta
});
const productSchemaUpdate = Joi.object({
    nombre,
    categoria,
    valor,
    valorOferta
});

module.exports = {
    productSchemaCreate,
    productSchemaUpdate
}