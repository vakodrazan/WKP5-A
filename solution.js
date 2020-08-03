const main = document.querySelector("main");
const outerModal = document.querySelector(".outerModal");
const innerModal = document.querySelector(".innerModal");


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
		id: 1596433221596,
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
		id: 1596433525384,
	},
];

const renderCard = () => {
    recipes.forEach(recipe => {
        const recipeHtml = `
        <article data-id="${recipe.id}">
            <header>
                <h2>${recipe.title}</h2>
            </header>
            <img src="${recipe.picture}" alt="">
            <ul>
                <li>Timing: ${recipe.timing}</li>
                <li>Difficulty: ${recipe.difficulty}</li>
            </ul>
            <button aria-label="More Info">More Info</button>
        </article>
        `;
        main.insertAdjacentHTML("beforeend", recipeHtml);
    });
    
};



const handleClick = e => {
    if (e.target.matches("article button")) {
        const button = e.target;
        const parent = button.closest('article');
		const id = Number(parent.dataset.id);
		const recipeObj = recipes.find(singleRecipe => singleRecipe.id === id);
		openModal(recipeObj);
        outerModal.classList.add("open");
    }
};


const openModal = (recipe) => {
    outerModal.classList.add('open');

    // const stepIngHtml = "";
    // recipe.steps.forEach(step => {
    //     let liString = `<li> ${step}</li>`;
        
    // });
    const modalHtml = `
        <header>
            <h2>${recipe.title}<span>by ${recipe.author}</span></h2>
        </header>
        <img src="${recipe.picture}" alt="">
        <ul>
            <li>Timing: ${recipe.timing}</li>
            <li>Difficulty: ${recipe.difficulty}</li>
        </ul>
        <section>

            <ol>
                Steps
                ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
        </section>

        <section>
            <ul>
            Ingredients
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>
        </section>
    `;
    innerModal.innerHTML = modalHtml;
}

const exitModal = e => {
    if (!e.target.closest('.innerModal')) {
        outerModal.classList.remove("open");
    }
}

const handleEscape = e => {
    if (e.key === 'Escape') {
        outerModal.classList.remove("open");
    }
};

outerModal.addEventListener("click", exitModal)
main.addEventListener("click", handleClick);
window.addEventListener("keydown", handleEscape)
renderCard();

// loop on the collection
// create a template for each recipe object
// put it in the dom