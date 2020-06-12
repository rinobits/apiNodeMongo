const Mongo = require('../../lib/mongo');
const bcrypt = require('bcrypt');
const users = new Mongo('users'); // INSTANCIA DE MONGO EN COL. USERS

bcrypt.hash(userPassword, 10)
    .then(hash => users.create({userName: userName, userPassword: hash}));
    