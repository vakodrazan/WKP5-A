const container = document.querySelector('.container');
const outerModal = document.querySelector(".outer-modal");
const innerModal = document.querySelector(".inner-modal");
const addRecipe = document.querySelector(".addRecipe");
const generateButton = document.querySelector('button.generate');

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

		// Loop through the steps array
		let stepValues = recipes[i].steps;
		let stepText = "";
		stepValues.forEach(stepFunction);
		function stepFunction(value) {
			stepText += "<li>" + value + "</li>"; 
		}

		// Loop through the ingredients array
		let ingredientValues = recipes[i].ingredients;
		let ingredientText = "";
		ingredientValues.forEach(ingredientsFunction);
		function ingredientsFunction(value) {
			ingredientText += "<li>" + value + "</li>"; 
		}
		
		// generate the HTML
		const myHtml = `
			<div class="content" 
				data-id="${recipes[i].id}" 
				data-step="${stepText}" 
				data-ingredient="${ingredientText}"
			>
				<h3>${recipes[i].title}<h3>
				<img src="${recipes[i].picture}" alt="">
				<div class="detail">
					<p>Timing: ${recipes[i].timing}</p>
					<p>Difficulty: ${recipes[i].difficulty}</p>
				</div>
				
				<button class="more-info">More info</button>
			<div>
		`;
		// put it in the DOM
		container.insertAdjacentHTML('beforeend', myHtml);
	}
};


// Create a function for the html
const openModel = recipe => {
	const myHtml = `
		<div class="content">
			<h3>${recipe.title} <span>by ${recipe.author}</span><h3>

			<img src="${recipe.picture}" alt="">
			<div class="detail">
				<p>Timing: ${recipe.timing}</p>
				<p>Difficulty: ${recipe.difficulty}</p>
			</div>
			<div class="detail">
				<div>
					<p>Steps:</p>
					${recipe.steps}
				</div>
				<div>
					<p>Ingredients</p>
					${recipe.ingredients}
				</div>
			<div>
			
		<div>
	`;

	innerModal.innerHTML = myHtml;
	outerModal.classList.add("open");
}

const handleMoreInfoBtn = event => {
	if(event.target.matches('button.more-info')) {
		// Slect the closest element
		const parent = event.target.closest('.content');
		const id = Number(parent.dataset.id);
		const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
		// Create a modal in html
		//call it here
		openModel(recipe)
    }
}


// Close the modal
const closeModal = () => {
    outerModal.classList.remove('open');
}

// Listen to the outside of the element to close the modal
outerModal.addEventListener('click', event => {
    const isOutside = !event.target.closest('.inner-modal')
    if (isOutside) {
        closeModal();
    }
});


// listen to the escape key to close the modal
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Create a form 
const handleAddBtn = e => {
    const myFormHtml = `
		<form>
			<label for="title">What's the recipe name</label>
			<input 
				type="text" 
				id="title" 
				name="title" 
				placeholder="Your recipe name" value="Eggs"
				required
			/>
			<label for="picture">Picture of the result (URL)</label>
			<input 
				type="url" 
				id="picture" 
				name="picture" 
				placeholder="Enter the url of your picture"
				value="https://bit.ly/2ZXyiKI"
				required
			/>

			<label for="author">Who's the cook?</label>
			<input
				type="text"
				id="author"
				name="author"
				placeholder="Enter your name here"
				value="Noeline"
				required
			/>

			<label for="difficulty">What's the difficulty?</label>
			<select name="difficulty" id="difficulty">
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>

			<label for="timing">How much time does it take?</label>
			<select name="timing" id="timing" class="select-timing">
				<option value="less-than-15min">Less than 15 minutes</option>
				<option value="15min">15 minutes</option>
				<option value="30min">30 minutes</option>
				<option value="45min">45 minutes</option>
				<option value="60min">60 minutes</option>
				<option value="more-than-1h">More than 1 hours</option>
			</select>

			<label for="ingredient1">Ingredients</label>
			<ul id="ingredientList">
				<li>
					<input type="text" id="ingredient1" value="ingredient 1" required/>
				</li>
			</ul>
			<button type="button" class="addIngredient">Add a new ingredient to the list</button>
			
			<label for="step1">Steps</label>
			<ul id="stepList">
				<li>
					<input type="text" id="step1" value="Step 1" required/>
				</li>
			</ul>
			<button type="button" class="addStep">Add a new steps to the list</button>

			<button class="addRecipe" type="submit">Add your recipe</button>
		</form>
    `;

	// Nest it in the modal
    innerModal.innerHTML = myFormHtml;
    outerModal.classList.add('open');
}

const handleSubmitBtnn = e => {
	e.preventDefault();
	console.log("Hello");
}

window.addEventListener("submit", handleSubmitBtnn);
addRecipe.addEventListener("click", handleAddBtn);
generateButton.addEventListener('click', renderCard);
window.addEventListener('click', handleMoreInfoBtn);