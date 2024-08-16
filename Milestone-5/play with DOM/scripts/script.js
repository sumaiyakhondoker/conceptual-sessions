console.log('connected');
const items = document.getElementsByClassName('li-item');
// console.log(items);
// to convert HTMLcollection(array like object) to array:
// const myArr = Array.from(items)
// console.log(myArr);

// const ul = document.getElementById('li-container');
// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling);
// const li = document.querySelector('li');
// console.log(name);
// console.log(bodyName.children);

// const ul = document.querySelector('#li-container')
// console.log(ul.innerText);
// console.log(ul.textContent);

// ul.innerHTML = '<p>Hello</p>'

// document.querySelector('h2').removeAttribute('class')
// document.querySelector('h2').setAttribute('class', 'first-heading')
// const att = document.querySelector('h2').getAttribute('id');
// // console.log(att);


// const h2 = document.createElement('h2');
// h2.innerText ='added by js'
// // console.log(h2);


const second = document.getElementById('second')
const li = document.createElement('li');
li.innerText = 'hello';
// ul.insertBefore(li, second)

// ul.remove();

const ul = document.querySelector('#li-container');
// const position = 
const newUl = ul.removeChild(ul.children[2]);
console.log(newUl);
console.log(ul);


