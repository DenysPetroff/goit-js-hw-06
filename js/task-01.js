const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const items = document.querySelectorAll('.item');

[...items].forEach(item => { 
    
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
});