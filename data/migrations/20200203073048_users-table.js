
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username')
            .notNullable()
            .unique()

        users
            .string('password')
            .notNullable()

        users
            .string('name')
            .notNullable()

        users
            .string('city')
            .notNullable()

        users
            .string('email')
            .notNullable()
            .unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
