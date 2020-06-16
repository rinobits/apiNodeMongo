// packages
const express                             = require('express');
const cors                                = require('cors');
const app                                 = express();
// imports                    
const routes                              = require('./app/routes'); 
const notFoundHandler                     = require('./utils/middlewares/notFoundHandler');
const {config}                            = require('./config');
const {logError, wrapError, errorHandler} = require('./utils/middlewares/errorsHandlers');
// cors
app.use(cors());

// bodyparser
app.use(express.json());

// routes
routes(app);

// catch 404
app.use(notFoundHandler);
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
    console.log(`Environment: ${config.dev?'development':'production'}`);
});

module.exports = app;