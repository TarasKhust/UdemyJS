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
    let question = prompt('Как вам техника Apple?', '');
    prom.textContent = question;
}, 2000);


let addClass = () => {
    li.classList.add('menu-item');
    menu.appendChild(li).appendChild(text);
    menu.insertBefore(item[2], item[1]);
    h1.textContent = 'Мы продаем только подлинную технику Apple';
    adv[1].removeChild(adv1);
};

addClass();



document.body.style = 'background: url(./img/apple_true.jpg) center no-repeat';


