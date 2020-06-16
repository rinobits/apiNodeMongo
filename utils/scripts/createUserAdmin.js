a = ()=> {
    const bcrypt = require('bcrypt');
    const {config} = require('../../config');
    const {Users} = require('../../lib/database'); 
    return new Promise((resolve, reject) => {
        bcrypt.hash(config.defaultAdminPassword, 10)
            .then(hash =>  {
                const body = {userName: config.defaultAdminName, userPassword: hash};
                Users.createUser(body);
                resolve("Done")
            })
            .catch(reject("CantHash"));
    })
};
a();