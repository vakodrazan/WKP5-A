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
		id: 1596168482053,
	},

	{
		title: 'Cassava',
		picture: 'https://bit.ly/2CVMivO',
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
		id: 1596168522409,
	},

	{
		title: 'Green Beans',
		picture: 'https://bit.ly/3gjbnz1',
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
		id: 1596168522419,
	},
	
	{
		title: 'Fish',
		picture: 'https://bit.ly/3hTKwKl',
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
		id: 1596168522450,
	},
];

const renderCard = () => {
	// check the recipes collection

	for (let i = 0; i < recipes.length; i++) {
		// generate the HTML
		const myHtml = `
			<div class="content" data-id="${recipes[i].id}">
				<h3>${recipes[i].title}<h3>
				<img src="${recipes[i].picture}" alt="">
				<div class="detail">
					<p>${recipes[i].timing}</p>
					<p>${recipes[i].difficulty}</p>
				</div>
				
				<button class="more-info">More info</button>
			<div>
		`;
		// put it in the DOM
		container.insertAdjacentHTML('beforeend', myHtml);
	}
};
// Find the button

const handleMoreInfoBtn = event => {
	if(event.target.matches('button.more-info')) {
		// Slect the closest element
		const parent = event.target.closest('');
		const id = Number(parent.dataset.id);
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		// Create a modal in html
		//call it here
		openModel(recipe)
    }
}


const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
window.addEventListener('click', handleMoreInfoBtn);