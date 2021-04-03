import style from './recipe.module.css'

const Recipe = (props) => {
    const {
        label: title,
        calories,
        image,
        ingredients,
        yield: serves,
        cuisineType,
        dietLabels
    } = props;

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, idx) => (<li key={idx}>
                    {ingredient.text}
                </li>))}
            </ol>

            <div style={{width:'90%'}}>
                <div><b>Calories:</b> {Math.trunc(calories)}</div>
                <div><b>Yield:</b> serves {serves}</div>

                {!!cuisineType.length && <div>
                    <b>Kitchen type:</b>
                    {cuisineType.map(kitchen => ` ${kitchen}`)}
                </div>}

                {!!dietLabels.length && <div>
                    <b>Diet labels:</b>
                    {dietLabels.map(label => ` ${label}`)}
                </div>}
            </div>

            <img className={style.image} src={image} alt={`${title}-${calories}`}/>
        </div>
    );
}

Recipe.defaultProps = {
    label: '',
    calories: 0,
    image: '',
    ingredients: '',
    yield: 0,
    cuisineType: [],
    dietLabels: []
}

export default Recipe;