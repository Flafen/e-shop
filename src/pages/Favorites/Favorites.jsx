import styles from "./Favorites.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../Body/Card";



export function Favorites() {
    const data = useSelector(state => state.cardData)
    console.log(data.favorite)
    return (
        <>
            <h2>Избранное</h2>
            <div className={styles.container}>
                {data.favorite.map((item) => <Card item={item} gender={item.gender} key={item.title} />)}
            </div>
        </>
    )
}