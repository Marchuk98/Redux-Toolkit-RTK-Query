import {useTypedSelector} from "../hooks/useTypedSelector";

export const useFavorites = () => {
    const {favorites} = useTypedSelector(state => state)

    return {favorites}
}