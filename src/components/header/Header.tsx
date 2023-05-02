import {BsFillBagHeartFill} from "react-icons/bs";
import styles from './Header.module.css'
import {useFavorites} from "../../hooks/useFavorites.ts";

export const Header = () => {
    const {favorites} = useFavorites()

    return(
        <header className={styles.header}>
            <BsFillBagHeartFill fontSize={20}/>
            <span>{favorites.length}</span>
        </header>
    )
}