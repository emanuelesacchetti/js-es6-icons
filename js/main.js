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
    const card = newCard(element);
    cardBoxDom.innerHTML += card;
});

selettore.addEventListener('change', function(){

    if(this.value == 'animal'){
        cardBoxDom.innerHTML = '';
        const animali = cards.filter((element) => {
            if(this.value == element.type){
                return true;
            }else{
                return false;
            }
        });
       animali.forEach((element) => {
        cardBoxDom.innerHTML += newCard(element);
       });
    }else if(this.value == 'vegetable'){
        cardBoxDom.innerHTML = '';
        const verdure = cards.filter((element) => {
            if(this.value == element.type){
                return true;
            }else{
                return false;
            }
        });
       verdure.forEach((element) => {
        cardBoxDom.innerHTML += newCard(element);
       });
    } else if(this.value == 'user'){
        cardBoxDom.innerHTML = '';
        const utente = cards.filter((element) => {
            if(this.value == element.type){
                return true;
            }else{
                return false;
            }
        });
       utente.forEach((element) => {
        cardBoxDom.innerHTML += newCard(element);
       });
    } else if(this.value == 'all'){
        cardBoxDom.innerHTML = '';
        cards.forEach((element) => {
        cardBoxDom.innerHTML += newCard(element);
       });
    }

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



/*
function optionCards(element){
    
        const animali = cards.filter((element) => {
            if(this.value == element.type){
                return true;
            }else{
                return false;
            }
        });
       animali.forEach((element) => {
        cardBoxDom.innerHTML += newCard(element);
       });
};
*/

































































/*
cards.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardIcon = document.createElement('div');
    cardIcon.classList.add('card-icon');
    cardIcon.style.color = `${element.color}`
    cardIcon.innerHTML = `<i class="fa-solid ${element.prefix}${element.name}"></i>`;

    const cardName = document.createElement('div');
    cardName.classList.add('card-name');
    cardName.innerHTML = `${element.name}`;

    card.append(cardIcon);
    card.append(cardName);
    cardBoxDom.innerHTML = (card);
*/

    

