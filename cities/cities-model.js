const db = require('../data/db-config');

module.exports = {
    getCities,
    getCityById
}

function getCities() {
    return db('cities')
}

function getCityById(id) {
    return db('cities').where({ id }).first()
}