
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
        })

        .createTable('cities-restaurants', tbl => {
            tbl.primary(['cities_id', 'restaurants_id'])

            tbl.integer('cities_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.integer('restaurants_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('cities-restaurants')
        .dropTableIfExists('restaurants')
        .dropTableIfExists('cities')
};
