//getElementById
const food = document.getElementById('food');
food.style.color = 'red';
food.style.backgroundColor = 'pink';
food.style.fontFamily = 'monospace';
food.style.fontSize = '30px';
food.style.textAlign = 'center';
console.log(food);

//getElementsByClassName
const fruit = document.getElementsByClassName('fruits');
fruit[0].style.color = 'red';
fruit[0].style.backgroundColor = 'pink';
fruit[0].textContent = 'Parul';
fruit[1].style.color = 'yellow';
fruit[2].style.color = 'orange';
console.log(fruit);

//getElementsByTagName():
const h4Element = document.getElementsByTagName('h4');
h4Element[0].style.color = 'springgreen';
console.log(h4Element);

const liElements = document.getElementsByTagName('li');
liElements[0].style.backgroundColor = 'blue';
liElements[1].style.backgroundColor = 'red';
liElements[2].style.backgroundColor = 'green';
console.log(liElements);

//querySelector():
const para = document.querySelectorAll('p');
para[0].style.color = 'blue';
para[1].style.color = 'green';
para[2].style.color = 'yellow';
console.log(para);

//getElementsByName():
const radio = document.getElementsByName("lang");
radio[0].style.accentColor = 'red';
radio[1].style.accentColor = 'green';
console.log(radio);


