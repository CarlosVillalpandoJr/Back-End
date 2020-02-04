const db = require('../data/db-config');

module.exports = {
    getCities,
    getCityById,
    addCity,
    getRestaurants,
    getRestaurantById,
    addRestaurant,
    deleteRestaurant,
    updateRestaurant
}

function getCities() {
    return db('cities')
}

function getCityById(id) {
    return db('cities').where({ id }).first()
}

function addCity(city) {
    return db('cities')
        .insert(city, 'id')
}

function getRestaurants() {
    return db('restaurants');
}

function getRestaurantById(id) {
    return db('restaurants').where({ id }).first()
}

function addRestaurant(rest) {
    return db('restaurants').insert(rest, 'id')
}

function deleteRestaurant(id) {
    return db('restaurants')
        .where({ id })
        .del();
}

function updateRestaurant(id, changes) {
    return db('restaurants')
        .where({ id })
        .update(changes, id)
}

