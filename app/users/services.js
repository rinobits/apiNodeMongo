const Mongo = require('../../lib/mongo');
const bcrypt = require('bcrypt'); 
class UserServices{
    constructor(){
        this.mongodb = new Mongo('users');
    }
    auth(username, password){
        return new Promise((res, rej) => {
            this.mongodb.find({userName: username})
                .then(db => {
                    if(db.length > 0){
                        const user = db[0];
//                        console.log(password);
//                        console.log(user.userPassword);
                        bcrypt.compare(password, user.userPassword)
                            .then(bool => {
                                if(bool){
                                    delete user.userPassword;
                                    res(user);
                                }
                                rej('Accecso Incorrecto');
                            })
                            .catch(err => {
                                rej('Acceso Incorrecto');
                            });
                    }else{
                        rej('Acceso Incorrecto');
                    }
                })
                .catch(err => {
                    rej('Acceso Incorrecto');
                });
        });
    }
    findUsers(){
        return this.mongodb.find();
    }
    findUserById(id){
            return this.mongodb.findById(id);
    }
    createUser(body){
        let {userName, userPassword} = body;
        return new Promise((resolve, reject) => {
            bcrypt.hash(userPassword, 10)
            .then(hash => {
                this.mongodb.create({userName, hash})
                .then(res => {
                    if(res){
                        resolve("Done");
                    }
                    reject("Nope");
                })
            })
            .catch(err => {
                console.log("can't hash => " + err);
                reject("can't create user " + userName);
            });
        });
        
    }
    updateUserById(id, body){
        return this.mongodb.updateById(id, body);
    }
    deleteUserById(id){
        return this.mongodb.deleteById(id);
    }
    
}
module.exports = UserServices;
