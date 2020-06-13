const Mongo = require('../../lib/mongo');

const bcrypt = require('bcrypt');
const {config} = require('../../config');
const {defaultAdminName, defaultAdminPassword } = config;
const users = new Mongo('users'); 
bcrypt.hash(defaultAdminPassword, 10)
    .then(hash => users.create({userName: defaultAdminName, userPassword: hash}));
