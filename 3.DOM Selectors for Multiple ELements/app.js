// document.getELementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listName = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listName);

//document.getELementsByTagName
let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li,index){
    console.log(li.className);
    li.textContent = `${index} : Hello`;
});
console.log(lis);

//document.querySelectorAll

const itemslist = document.querySelectorAll('ul.collection li.collection-item');


itemslist.forEach(function(item,index){
    item.textContent = `${index} : Hello World`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = "#ccc";
});

for(let i=0; i< liEven.length;i++){
    liEven[i].style.background = "#f4f4f4";
}

console.log(itemslist);
