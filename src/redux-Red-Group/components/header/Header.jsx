import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import styles from './Header.module.css'
import { useFavourites } from '../../hooks/useFavourites'

export default function () {
    const { favourites } = useFavourites()

    return (
        <header className={styles.header}>
            <BsFillBookmarkHeartFill fontSize={20} />
            <span>{favourites.length}</span>
        </header>
    )
}