const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const selettore = document.getElementById('select');
const cardBoxDom = document.querySelector('.card-box');

cards.forEach(element => {
    element.color = `#${setColor()}`;
    const card = newCard(element);
    cardBoxDom.innerHTML += card;
});
creaSectionOption();

selettore.addEventListener('change', function(){

    cardBoxDom.innerHTML = '';
    cards.filter((element) => {
        if(this.value == element.type){
            cardBoxDom.innerHTML += newCard(element);
        }

        if(this.value == 'all'){
            cardBoxDom.innerHTML = '';
            cards.forEach(element => {
                cardBoxDom.innerHTML += newCard(element);
            })
        }
    });
});

function newCard(element){
   const card =  `<div class="card">
                    <div class="card-icon">
                        <i style="color:${element.color};" class="fa-solid ${element.prefix}${element.name}"></i>
                    </div>
                    <div class="card-name">${element.name}</div>
                </div>`;
    return card;
};

function setColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
};

function creaSectionOption(){
    selectorTypes = [];
    selettore.innerHTML += `<option value="all">All</option>`
    cards.forEach((element) => {
        if(!selectorTypes.includes(element.type)){
            selectorTypes.push(element.type);
            selettore.innerHTML += `<option value="${element.type}">${element.type}</option>`
        }
    })
};





                            

