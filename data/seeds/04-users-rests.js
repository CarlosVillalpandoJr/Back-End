
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users-restaurants').insert([
        {users_id: 1, restaurants_id: 1},
        {users_id: 2, restaurants_id: 2},
        {users_id: 3, restaurants_id: 3}
    ]);
};
