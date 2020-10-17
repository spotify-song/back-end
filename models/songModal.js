const db = require('../data/config-db');


function addUser(body) {
   return db('user').insert(body, 'id');
}
function addTrackToken(body) {
   return db('track_token').insert(body, 'id');
}

// filter user by id or display name
function findUserBy(filter) {
   return db('user').where(filter);
}

// find user by ID
function findUserById(id) {
   return db('user').where({id});
}

// update user by ID
function updateUser(id, changes) {
   return db('user').where({id}).update(changes);
}

// remove user by ID
function deleteUser(id) {
   return db('user').where({id}).del();
}
 
module.exports = {
addUser,
addTrackToken,
findUserBy,
findUserById,
updateUser,
deleteUser
}