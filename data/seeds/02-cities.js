exports.seed = function(knex) {
      // Inserts seed entries
    return knex('cities').insert([
      {name: 'Chicago'},
      {name: 'New York'},
      {name: 'Los Angeles'}
    ]);
};
