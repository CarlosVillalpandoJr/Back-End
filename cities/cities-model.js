const db = require('../data/db-config');

module.exports = {
    getCities
}

function getCities() {
    return db('cities')
}