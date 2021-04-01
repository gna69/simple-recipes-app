import './App.css';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Recipe from "./recipe";

const App = () => {

    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = () => {
        fetch(exampleRequest).then(response => {
            return response.json();
        }).then(data => {
            setRecipes(data.hits);
        }).catch(error => {
            toast.error("Cant get recipes list!");
            console.error(error);
        });
    }

    const updateSearch = event => {
        setSearch(event.target.value);
    }

    const getSearch = event => {
        event.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <div className="App">

            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar"
                       type="text"
                       value={search}
                       onChange={updateSearch}/>

                <button className="search-button" type="submit">
                    Search
                </button>
            </form>

            <div className="recipes">
                {recipes.map((recipe, idx) => (
                    <Recipe key={idx} {...recipe.recipe}/>
                ))}
            </div>
        </div>
    );
}

export default App;
