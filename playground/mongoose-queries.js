const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5c58d1a19628e11fa8a13498 ';

if (!ObjectId.isValid(id)) {
    console.log('ID not valid');
}*/

/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));*/

var id = "5c450680c9bb664020545681";

/*if (!ObjectId.isValid(id)) {
    console.log('ID not valid');
}

User.find({
    _id: id
}).then((users) => {
    console.log('Users', users);
});

User.findOne({
    _id: id
}).then((user) => {
    console.log('User', user);
});*/

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
