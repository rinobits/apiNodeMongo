require('dotenv').config();
const config = {
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    defaultAdminName: process.env.DEFAULT_ADMIN_USER,
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    dev: process.env.NODE_ENV !== 'production'
};

module.exports = {config};

