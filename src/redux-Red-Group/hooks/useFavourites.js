import { useSelector } from "react-redux"

export const useFavourites = () => {
    const { favourites } = useSelector(state => state)
    return { favourites }

}