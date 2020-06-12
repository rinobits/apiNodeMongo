//packages 
const {MongoClient, ObjectId} = require('mongodb');
//imports
const {config: {dbUser, dbPassword, dbName, dbHost}} = require('../config');
//const
const dbUserEncoded     = encodeURIComponent(dbUser);
const dbPasswordEncoded = encodeURIComponent(dbPassword);
const mongoURI          = `mongodb+srv://${dbUserEncoded}:${dbPasswordEncoded}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

class MongoLib{
    constructor(collectionName){
        this.client = new MongoClient(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.dbName = dbName;
        this.collectionName = collectionName;
    }
    connect(){
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(error => {
                    if(error){
                        reject(error); // return the error
                    }
                    console.log("Connected successfully to mongo");
                    resolve(this.client.db(this.dbName)); // initialize db
                });
            });
        }
        return MongoLib.connection; // return initialized db
    }
    find(filter = {}){
        return this.connect()
            .then(db => db.collection(this.collectionName).find(filter).toArray());
    }
    findById(id){
        id = ObjectId(id);
        return this.connect()
            .then(db => db.collection(this.collectionName).findOne({_id: id}));        
    }
    create(document){
        return this.connect()
            .then(db => db.collection(this.collectionName).insertOne(document))
            .then(result => result.insertedId);
    }
    updateById(id, data){
        id = ObjectId(id);
        return this.connect()
            .then(db => db.collection(this.collectionName).updateOne(
                {_id: id},
                {
                    $set: data
                }
                ))
            .then(result => result.upsertedId || id);
    }
    deleteById(id){
        id = ObjectId(id);
        return this.connect()
            .then(db => db.collection(this.collectionName).deleteOne({_id: id}))
            .then(() => id);
    }
    createIndex(obj = {}, opt = {}){
        return this.connect()
            .then(db => db.collection(this.collectionName).createIndex(obj, opt))
                .then(res => console.log("index created"))
                .catch(err => console.log(err));
    }
    dropIndexes(){
        return this.connect()
            .then(db => db.collection(this.collectionName).dropIndexes())
                .then(res => console.log("all indexes deleted"))
                .catch(err => console.log(err));
    }

}
module.exports = MongoLib;