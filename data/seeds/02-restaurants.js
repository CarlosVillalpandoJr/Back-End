
exports.seed = function(knex) {
      // Inserts seed entries
    return knex('restaurants').insert([
      {
        name: 'Chicago Dog House', 
        address: '816 W Fullerton Ave',
        city: 'Chicago',
        zip: '60614',
        phone: '(773)248-3647',
        website: 'chicagodoghouse.com',
        rating: 5,
        notes: 'Great Chicago style hot dogs',
        stamped: true
      },
      {
        name: 'Advent Garden', 
        address: '130 E 7th St',
        city: 'New York',
        zip: '10009',
        phone: '(773)555-5555',
        website: 'adventgarden.com',
        rating: 4,
        notes: 'Delicious vegan burgers and sweet potato fries',
        stamped: true
      },
      {
        name: 'Bestia', 
        address: '2121 E 7th Pl',
        city: 'Los Angeles',
        zip: '90021',
        phone: '(213)514-5724',
        website: 'bestia.com',
        rating: 4,
        notes: 'Trendy Italian restaurant from an acclaimed husband-&-wife.',
        stamped: true
      }
    ]);
};
