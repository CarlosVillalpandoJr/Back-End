
exports.up = function(knex) {
    return knex.schema
        .createTable('cities', cities => {
            cities.increments()

            cities.string('name').notNullable().unique()
        })
    
    
        .createTable('restaurants', restaurants => {
            restaurants.increments()

            restaurants.string('name').notNullable()

            restaurants.string('address').notNullable().unique()

            restaurants.string('city').notNullable().unique()

            restaurants.string('zip').notNullable().unique()

            restaurants.string('phone').notNullable().unique()

            restaurants.string('website').notNullable().unique()

            restaurants.integer('rating')

            restaurants.text('notes')

            restaurants.boolean('stamped')

            restaurants
                .integer('city_id')
                .unsigned()
                .references('id')
                .inTable('cities')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })

        .createTable('users-restaurants', tbl => {
            tbl.primary(['users_id', 'restaurants_id'])

            tbl.integer('users_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.integer('restaurants_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('restaurants')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users-restaurants')
        .dropTableIfExists('restaurants')
        .dropTableIfExists('cities')
};
