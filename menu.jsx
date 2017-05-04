/*Create the structure for the menu that holds the list of recipes*/
// const Menu = ({title, recipes}) => (
// 	<article>
// 	<header>
// 	<h1>{title}</h1>
// 	</header>
// 	<div className ="recipes">
// 	{recipes.map((recipe, i) => <Recipe key={i} {...recipe} /> )}
// 	</div>
// 	</article>
// )

const {render} = ReactDOM;

const Menu = ({ title, recipes }) => ( <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />
)}
        </div>
    </article>
)

const Recipe = ({name, ingredients, steps}) => 
	<section id={name.toLowerCase().replace(/ /g, "-")}>
		<h1>{name}</h1>
		<ul className="ingredients">
			{ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}
		</ul>
		<section className="instructions">
		<h2>Cooking instructions</h2>
			{steps.map(step,i) => <p key={i}>{step}</p>)}
		</section>
	</section>

// render('Menu', document.getElementById('react-container'))

