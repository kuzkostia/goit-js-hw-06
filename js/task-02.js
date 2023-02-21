const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients')

ingredients.forEach((item) => {
    const ingredientLi = document.createElement('li');
    ingredientLi.classList = 'item';
    ingredientLi.textContent = item;
  
    ingredientsUl.append(ingredientLi);
  }
)
