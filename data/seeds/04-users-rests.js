
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users_restaurants').insert([
        {user_id: 1, restaurant_id: 1},
        {user_id: 2, restaurant_id: 2},
        {user_id: 3, restaurant_id: 3}
    ]);
};
