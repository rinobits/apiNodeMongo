const Mongo = require('../../lib/mongo');

const users = new Mongo('users');

const init = async() => {
    await users.dropIndexes();
    await users.createIndex({
        userName: 1
    },
    {
        unique: true
    });
    process.exit(0);
}

init();