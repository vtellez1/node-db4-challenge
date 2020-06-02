
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl =>{
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable().index();
      tbl.text('instructions').notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient', 128).notNullable();
      tbl.integer('quantity').notNullable();
  }) 
  .createTable('recipes_ingredients', tbl =>{
      tbl.increments();
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .notNullable() 
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes');
};
