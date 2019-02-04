// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);*/
//    mongoose.connect('mongodb://localhost/test', { useMongoClient:true })
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true, useMongoClient:true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')


    client.close();
});