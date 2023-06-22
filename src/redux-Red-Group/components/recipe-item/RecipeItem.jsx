import styles from './RecipeItem.module.css';
import { useActions } from '../../hooks/useAction';
import { useFavourites } from '../../hooks/useFavourites';




const RecipeItems = ({ recipe }) => {

    const { favourites } = useFavourites();

    const { toggleToFavourites } = useActions();

    const isExists = favourites.some(r => r.id === recipe.id)

    return (
        <div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={100} />
            <h3>{recipe.name}</h3>
            <button className={styles.btnDefault} onClick={() => {
                toggleToFavourites(recipe)
            }}>{isExists ? 'Remove from ' : 'Add to '}favourites</button>
        </div>
    )
}
export default RecipeItems;
