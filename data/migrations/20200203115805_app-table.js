
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

            restaurants.string('city').notNullable()

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
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })

        .createTable('users_restaurants', tbl => {
            tbl.primary(['user_id', 'restaurant_id'])

            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.integer('restaurant_id')
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
        .dropTableIfExists('users_restaurants')
        .dropTableIfExists('restaurants')
        .dropTableIfExists('cities')
};
