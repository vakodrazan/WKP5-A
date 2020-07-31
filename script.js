const container = document.querySelector('.container');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'oil'],
		steps: [
			'Add some salt on it',
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
		],
		id: 1,
	},

	{
		title: 'Cassava',
		picture: './images/cassa.jpg',
		author: 'Noe',
		difficulty: 'Medium',
		timing: '30',
		ingredients: ['Cassava', 'sugar', 'water'],
		steps: [
			"Peeling the cassava",
			'Cut it into what you want',
			'Wash it',
			'Put inside of pot',
			"Add some water",
			'Put sugar (exception)',
			"Wait for it to be cooked"
		],
		id: 2,
	},

	{
		title: 'Green Beans',
		picture: './images/green-beans.jpg',
		author: 'Jea',
		difficulty: 'easy',
		timing: '12',
		ingredients: ['green beans', 'salt', 'oil', "water"],
		steps: [
			'Cut the green beans',
			'Put the pot on the fire with oil inside',
			'Put it in the pot',
			'Add some salt on it',
		],
		id: 3,
	},
	
	{
		title: 'Fish',
		picture: './images/fish.jpg',
		author: 'Marie',
		difficulty: 'difficult',
		timing: '40',
		ingredients: ['fish', 'salt', 'oil', "water", "tomatoes", 'oignons'],
		steps: [
			'Prepare the fish',
			"Put it in a pot, don't put water yet",
			'Put all the ingredieants you want with it',
			'After 5 min on the fire pour litle water',
		],
		id: 3,
	},
];

const renderCard = () => {
	// check the recipes collection

	for (let i = 0; i < recipes.length; i++) {
		// generate the HTML
		const myHtml = `
			<div class="content">
				<h3>${recipes[i].title}<h3>
				<img src="${recipes[i].picture}" alt="">
				<p>${recipes[i].timing}</p>
				<p>${recipes[i].difficulty}</p>
				<button>More</button>
			<div>
		`;
		// put it in the DOM
		container.insertAdjacentHTML('beforeend', myHtml);
	}
};

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
