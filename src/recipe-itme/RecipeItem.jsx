
import styles from './RecipeItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store/favorites/favorites.slice.js";


export const RecipeItem = ({recipe}) => {
    const {favorites} = useSelector(state => state)

    const dispatch = useDispatch()

    const isExists = favorites.some(r => r.id === recipe.id)

    const addFavoritesHandler = () => {
        dispatch(actions.toggleFavorites(recipe))
    }

    console.log(favorites)

    return(
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button onClick={addFavoritesHandler}>add to favorites</button>
        </div>
    )
}