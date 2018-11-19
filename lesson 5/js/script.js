let menu = document.querySelector('.menu');
let h1 = document.getElementById("title");
let item = document.querySelectorAll('li');
let li = document.createElement('li');
let text = document.createTextNode('Пятый пункт');
let adv = document.querySelectorAll('.column');
let adv1 = document.querySelector('.adv');
let body = document.querySelector('body');
let prom = document.getElementById('prompt');

let timer = () => {
    let question = prompt('Как вам техника Apple', '');
    prom.innerHTML = question;
};

let timerId = setTimeout(timer, 3000);


li.classList.add('menu-item');
menu.appendChild(li).appendChild(text);
menu.insertBefore(item[2], item[1]);

h1.textContent = 'Мы продаем только подлинную технику Apple';

adv[1].removeChild(adv1);

body.style = 'background: url(./img/apple_true.jpg) center no-repeat';


