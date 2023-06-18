const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsUl = document.querySelector("#ingredients");

const ingrCollection = ingredients.map((ingr) => {
  const li = document.createElement('li');
  li.textContent = ingr;
  li.classList.add('item');
  return li;
})

ingredientsUl.append(...ingrCollection);