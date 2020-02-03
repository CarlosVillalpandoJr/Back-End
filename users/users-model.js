const db = require('../data/db-config');

module.exports = {
    getUsers,
    getUserBy,
    addUser
};

function getUsers() {
    return db('users').select('id', 'username', 'name', 'email', 'city')
}

function getUserBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({ id }).first();

}

// async function addUser(user) {
//     const [id] = await db('users').insert(user);

//     return getUserBy(id)
// }

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}