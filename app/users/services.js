const {Users}                   = require('../../lib/database');
const bcrypt                    = require('bcrypt'); 
class UserServices{
    findUsers(){
        return new Promise((resolve, reject) => {
            Users.findAll()
                .then(r => resolve({"ALL USERS => " : r}))
                .catch(e => reject(e));
        });
    }
    findUserById(id){
        return new Promise((resolve, reject) => {
            Users.findByPk(id)
                .then(r => resolve({'user':r}))
                .catch(e => reject(e));
        });
    }
    createUser(body){
        return new Promise((resolve, reject) => {
            bcrypt.hash(body.userPassword, 10)
            .then(hash => {
                body.userPassword = hash;
                Users.create(body)
                    .then(user => resolve(user))
                    .catch(err => reject(err));
                
            })
            .catch(e => console.log(e));
        });
    }
    updateUserById(id, body){
        return new Promise((resolve, reject) => {
            Users.update(body, {
                where: {id: id}
            })
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA": true})
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    deleteUserById(id){
        return new Promise((resolve, reject) => {
            Users.destroy({
                where: {id}
            })
            .then(r => {
                if(r == 1) resolve({"DELETE DATA": true})
                else reject({"DELETE DATA:": false})
            })
            .catch(e => reject("Can't delete"));
        });
    }
    
}
module.exports = UserServices;
