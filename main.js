/*//function expression to select elements
const selectElement = (s) => document.querySelector(s); 

//open the menu on click
selectElement(s:'.open').addEventListener('click',()=>{
	selectElement(s:'.nav-list').classList.add('active');
});

//close the menu on click
selectElement(s:'.close').addEventListener('click',()=>{
	selectElement(s:'.nav-list').classList.remove(tokens:'active');
});*/

const opens = document.querySelector('.open');
const closes = document.querySelector('.close');

const navlist = document.querySelector('.nav-list');

opens.addEventListener('click',()=>{
	navlist.classList.add('active');
});

closes.addEventListener('click',()=>{
	navlist.classList.remove('active');
});
