import {RecipeItem} from "../components/recipe-items/RecipeItem";
import {Header} from "../components/header/Header";
import {useGetRecipesQuery} from '../store/api/api';
import {CreateRecipe} from "./create-recipe/CreateRecipe";
import {ChangeEvent, useState} from "react";

// const userId = null
//do not show data under a certain condition
//     undefined, {
//     skip: !userId,
// })
function App() {


    const [searchTerm, setSearchTerm] = useState('')
    const [queryTerm, setQueryTerm] = useState('')


    const {isLoading, data} = useGetRecipesQuery(queryTerm)

    const handleSearch = () => {
        setQueryTerm(searchTerm)
    }
    const onChangeSearchHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value)
    }

    return (
        <section>
            <Header/>
            {/*<User/>*/}
            <CreateRecipe/>

            <div style={{padding:10}}>
                <p>If you wanna find: </p>
                <div>
                <input type={"search"} value={searchTerm} onChange={onChangeSearchHandler} placeholder={'Enter search term'}/>
                <button onClick={handleSearch}>Search</button>
                </div>
            </div>

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
