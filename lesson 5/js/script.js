'use strict';
let menu = document.querySelector('.menu');
let h1 = document.getElementById("title");
let item = document.querySelectorAll('li');
let li = document.createElement('li');
let text = document.createTextNode('Пятый пункт');
let adv = document.querySelectorAll('.column');
let adv1 = document.querySelector('.adv');
let prom = document.getElementById('prompt');

let timerId = setTimeout( () => {
    prom.textContent = window.prompt('Как вам техника Apple?', '');
}, 2000);


let addClass = () => {
    li.classList.add('menu-item');
    h1.textContent = 'Мы продаем только подлинную технику Apple';
    document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';
    menu.appendChild(li).appendChild(text);
    menu.insertBefore(item[2], item[1]);
    adv[1].removeChild(adv1);
};

addClass();





