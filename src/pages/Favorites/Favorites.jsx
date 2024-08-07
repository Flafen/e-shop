import styles from "./Favorites.module.scss"
import { useSelector } from "react-redux";
import { Card } from "../../Body/Card";



export function Favorites() {
    const data = useSelector(state => state.cardData)
    console.log(data.favorite)
    const isFavoriteEmpty = data.favorite.length
    return (
        isFavoriteEmpty 
        ? <>  
            <h1 className={styles.topic}>Избранное</h1>
            <div className={styles.container}>
                {data.favorite.map((item) => <Card item={item} gender={item.gender} key={item.title} />)}
            </div>
         </>
         : <>
            <div>
                <h1 className={styles.topic}>Избранное</h1>
                <h2 style={{color:"#333", fontSize:"1.5rem", textAlign: "center", margin: "10% auto"}}>Вы еще ничего не добавили в избранное...</h2>
            </div>
           </>
    )
}