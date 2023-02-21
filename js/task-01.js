var countLi = document.querySelector('#categories').children.length;
console.log("Number of categories: " + countLi);

var categories = document.querySelectorAll('.item');


categories.forEach((item) => console.log("Category: " + item.firstElementChild.textContent + "\n" + "Elements: " + item.lastElementChild.children.length));


