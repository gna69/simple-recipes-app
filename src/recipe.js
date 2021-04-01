import style from './recipe.module.css'

const Recipe = (props) => {
    const {label: title, calories, image, ingredients} = props;
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, idx) => (<li key={idx}>
                    {ingredient.text}
                </li>))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt={`${title}-${calories}`}/>
        </div>
    );
}

export default Recipe;