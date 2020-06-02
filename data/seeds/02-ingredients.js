
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'bread', quantity: '2 slices'},
        {ingredient: 'peanut butter', quantity: '1 tbps'},
        {ingredient: 'jelly', quantity: '1 tbps'},
        {ingredient: 'water', quantity: '1 cup'}
      ]);
    });
};
