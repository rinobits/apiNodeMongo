// packages
const express                   = require('express');
const router                    = express.Router();
// imports          
const { login }                 = require('./responses');

router.post('/', login);

module.exports  = router;