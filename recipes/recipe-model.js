const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db.select('recipes.recipe_name').from('recipes')
}


function getShoppingList(recipe_id){
    return db('recipes as r')
    .join('recipes_ingredients as ri', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('r.id', 'r.recipe_name', 'i.ingredient', 'i.quantity')
    .where('recipe_id', recipe_id)
}

function getInstructions(id){
    return db('recipes').where({ id }).first()
}