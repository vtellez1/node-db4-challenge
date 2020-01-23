
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name:'PB&J', instructions:'Spread PB on one toast. Spread Jelly on other. Combine.'},
        {recipe_name:'Water', instructions:'Add Water in a cup. Done'}
      ]);
    });
};
