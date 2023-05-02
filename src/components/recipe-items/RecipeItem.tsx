import styles from './RecipeItem.module.css'
import {useActions} from "../../hooks/useActions.ts";
import {useFavorites} from "../../hooks/useFavorites.ts";


export const RecipeItem = ({recipe}) => {
    const {favorites} = useFavorites()

    const {toggleFavorites} = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

    const addFavoritesHandler = () => {
        toggleFavorites(recipe)
    }

    return(
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={100} />
            <h3>{recipe.name}</h3>
            <button onClick={addFavoritesHandler}>{isExists ? 'Remove from' : "Add to"} favorites</button>
        </div>
    )
}