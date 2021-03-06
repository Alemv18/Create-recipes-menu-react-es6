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
