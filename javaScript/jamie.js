import { getRecipes } from './retrieveRecipes.js';

main();

function main() {
  getRecipes().then(insertRecipe);
}

function insertRecipe(res) {
  
}