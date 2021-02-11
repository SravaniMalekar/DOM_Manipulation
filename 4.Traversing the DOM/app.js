let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

//get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 -Element
// 2 -Attribute
// 3 -Text node
// 8 -Comment
// 9 -Document itself
// 10 -Doctype

//get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

//children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//firstchild
val = list.firstChild;
val = list.firstElementChild;

//lastchild
val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);