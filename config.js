require('dotenv').config();
const config = {
    db:                   process.env.DB_NAME,
    user:                 process.env.DB_USER,
    password:             process.env.DB_PASSWORD,
    _host:                process.env.DB_HOST,
    port:                 process.env.PORT,
    _dialect:             process.env.DIALECT,
    dbPort:               process.env.DB_PORT,
    defaultAdminName:     process.env.DEFAULT_ADMIN_USER,
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
    authJwtSecret:        process.env.AUTH_JWT_SECRET,
    dev:                  process.env.NODE_ENV !== 'production'
};

module.exports = {config};

