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

async function addUser(user) {
    const [id] = await db('users').insert(user);

    return getUserBy(id)
}