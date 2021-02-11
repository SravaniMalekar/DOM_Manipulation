//REPLACE ELEMENT

//Create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new textnode
newHeading.appendChild(document.createTextNode('Task List'));

//get old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardList = document.querySelector('.card-action');

//replace
cardList.replaceChild(newHeading,oldHeading);

//REMOVE ELEMENTS
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);

//CLASSES &ATTRIBUTE
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

//attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
link.setAttribute('title','Google');
val = link.hasAttribute('href');
link.removeAttribute('title');
val = link;

console.log(val);

