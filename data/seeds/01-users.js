
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'clos',
          password: 'carlos123',
          name: 'Carlos',
          city: 'Chicago',
          email: 'carlos@gmail.com'
        },
        {
          username: 'scott',
          password: 'scott123',
          name: 'Scott',
          city: 'New York',
          email: 'scott@gmail.com'
        },
        {
          username: 'alston',
          password: 'alston123',
          name: 'Alston',
          city: 'Los Angeles',
          email: 'alston@gmail.com'
        }
    ]);
};
