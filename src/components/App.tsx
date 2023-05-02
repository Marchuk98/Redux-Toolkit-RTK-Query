import {RecipeItem} from "src/components/recipe-items/RecipeItem";
import {Header} from "src/components/header/Header";
import {useGetRecipesQuery} from '../store/api/api.ts';
import {CreateRecipe} from "./create-recipe/CreateRecipe";

// const userId = null
//do not show data under a certain condition
function App() {
    const {isLoading, data} = useGetRecipesQuery()
        //     undefined, {
        //     skip: !userId,
        // })

    return (
        <section>
            <Header/>
            {/*<User/>*/}
            <CreateRecipe/>
            <div>
                {isLoading
                    ? <div>Loading...</div>
                    : data ? data.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)
                        : <div>Not found</div>}
            </div>
        </section>
    )
}

export default App
