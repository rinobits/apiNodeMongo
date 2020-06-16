// packages
const boom = require('@hapi/boom');
const notFoundHandler = (req, res) => {
    if(boom.notFound()) {
        const { output: {statusCode, payload}} = boom.notFound();
        res.status(statusCode).json({'error' : payload});
    }
}
module.exports = notFoundHandler;