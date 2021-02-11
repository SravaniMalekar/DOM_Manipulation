//creating an element
const li = document.createElement('li');

//addclass
li.className = 'collection-item';

//addid
li.id = 'new-item';

//add attribute
li.setAttribute('title','New Item');

//create text node and append
li.appendChild(document.createTextNode('Hello World'));

//create new link element
link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//addicon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link to li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);