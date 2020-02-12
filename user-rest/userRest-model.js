const db = require('../data/db-config');

module.exports = {
    getUserRest,
    addUserRest,
    deleteUserRest
}

function getUserRest(userId) {
    return db('restaurants')
        .join('users_restaurants', 'restaurants.id', 'users_restaurants.restaurant_id')
        .join('users', 'users.id', 'users_restaurants.user_id')
        .where('users.id', userId)
        .select('users.name', 'restaurants.name', 'restaurants.city', 'restaurants.id')
}

function addUserRest(userId, restId) {
    return db('users_restaurants')
        .insert({ user_id: userId, restaurant_id: restId }, "id")
}

function deleteUserRest(userId, restId) {
    return db('users_restaurants')
        .where({ user_id: userId, restaurant_id: restId })
        .del()
}