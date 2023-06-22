import React from "react";
import styles from './App.module.css'
import RecipeItems from "./recipe-item/RecipeItem";
import Header from "./header/Header";
import { useGetRecipesQuery } from "../sotre/api/api";
import CreateRecipe from "../createRecipe/CreateRecipe";


// const userId = 5;

const App = () => {
    const { isloading, data } = useGetRecipesQuery('')
    //     undefined, {
    //     skip: !userId,
    // });


    const Search = () => {
        <div>
            <input placeholder="searcher" />
        </div>
    }
    return (

        <div className={styles.body}>
            <Header />
            {/* <User /> */}
            <CreateRecipe />
            {isloading ? <div>Loading...</div> :
                data ? data.map(recipe =>
                    <RecipeItems key={recipe.id} recipe={recipe} />
                ) : <div>Not found</div>}

        </div>
    )
}

export default App;