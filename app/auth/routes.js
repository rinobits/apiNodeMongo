// packages
const express   = require('express');
const router    = express.Router();
// imports
const control   = require('./responses');
router.get( '/', control.localAuth, control.authGet);
router.post('/', control.authPost);
module.exports = router;

