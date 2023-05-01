import styles from './RecipeItem.module.css'
import {useActions} from "../../hooks/useActions.js";
import {useFavorites} from "../../hooks/useFavorites.js";


export const RecipeItem = ({recipe}) => {
    const {favorites} = useFavorites()

    const {toggleFavorites} = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

    const addFavoritesHandler = () => {
        toggleFavorites(recipe)
    }

    console.log(favorites)

    return(
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button onClick={addFavoritesHandler}>{isExists ? 'Remove from' : "Add to"} favorites</button>
        </div>
    )
}