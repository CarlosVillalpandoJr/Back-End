
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

            restaurants.string('phone number').notNullable().unique()

            restaurants.string('website').notNullable().unique()

            restaurants.integer('rating')

            restaurants.text('notes')

            restaurants.boolean('stamped')

            restaurants.integer('city_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('cities')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('restaurants')
        .dropTableIfExists('cities')
};
