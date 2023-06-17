const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector("#ingredients");

ingredients.forEach(ingredient => { 
  const li = document.createElement('li')
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientsUl.append(li)
})
