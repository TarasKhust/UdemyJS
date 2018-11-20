let buttonStart = document.getElementById('start');
let rightBlock = document.querySelectorAll('div');
let input = document.querySelectorAll('.expenses-item');
let approve = document.getElementsByTagName('button')[0];
let approveOptional = document.getElementsByTagName('button')[1];
let expensesItem = document.querySelectorAll('.optionalexpenses-item');
let a = document.querySelector('.choose-income-label');
console.log(approve);
console.log(approveOptional);
console.log(expensesItem);
console.log(expensesItem[2]);



rightBlock.forEach((item) => {
    if (item.textContent === '') {
        console.log(item);
    }
});

console.log(input);