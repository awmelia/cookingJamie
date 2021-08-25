/*I created a simple local API(only three recipes) to just get a feeling of how it would work and "feel" 
on the website. Keep in mind that his book include around 300 recipes*/
export function getRecipes() {
  return fetch('https://localhost:5001/api/recipe')
    .then((response) => response.json())
    .then (function (data) {
      return data;
    }
  );
}