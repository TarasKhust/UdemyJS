let menu = document.querySelector('.menu');
let li = document.createElement('li');
let text = document.createTextNode('Пятый пункт');

li.classList.add('menu-item');
menu.appendChild(li).appendChild(text);
console.log(li);