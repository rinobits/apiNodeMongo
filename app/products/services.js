const {Products} = require('../../lib/database');

class ProductServices{
    findProducts(){
        return new Promise((resolve, reject) => {
            Products.findAll()
                .then(r => resolve({"ALL USERS => " : r}))
                .catch(e => reject(e));
        });
    }
    findProductById(id){
        return new Promise((resolve, reject) => {
            Products.findByPk(id)
                .then(r => resolve({'user':r}))
                .catch(e => reject(e));
        });
    }
    createProduct(body){
        return new Promise((resolve, reject) => {
            Products.create(body)
                .then(console.log)
                .catch(console.log);
        });
    }
    updateProductById(id, body){
        return new Promise((resolve, reject) => {
            Products.update(body, {
                where: {id: id}
            })
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA": true})
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    deleteProductById(id){
        return new Promise((resolve, reject) => {
            Products.destroy({
                where: {id}
            })
            .then(r => {
                if(r == 1) resolve({"DELETE DATA": true})
                else reject({"DELETE DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    
}
module.exports = ProductServices;
