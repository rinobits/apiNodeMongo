const Mongo = require('../../lib/mongo');

class OrderService{
    constructor(){
        this.mongodb = new Mongo('orders');
    }
    // developers
    getAll(){
        return this.mongodb.find();
    }
    getById(id){
        return this.mongodb.findById(id);
    }
    // admin
    create(body){
        return this.mongodb.create(body);
    }
    updateById(id, data){
        return this.mongodb.updateById(id, data);
    }
    deleteById(id){
        return this.mongodb.deleteById(id);
    }
}

module.exports = OrderService;