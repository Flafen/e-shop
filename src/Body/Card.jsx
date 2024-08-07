import styles from "./Card.module.scss"
import { Link } from "react-router-dom";
import { addToCart, like } from "../store/actions";

export function Card({item, gender}) {
  function setLike() {
    like(gender, item.title)
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={setLike} className={styles.like}>
        {item.liked?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}
      </div>
      <Link to={`/Product/${gender}/${item.id}`} className={styles.wrapper}>
          <img className={styles.image} src={item.photo} alt="" />
          <p>{item.title}</p>
          <div className={styles.cardFooter}>
            <p className={styles.price}>{item.price} ₽</p>
            <button className={styles.buyButton}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
      </Link>
    </div>
  )
}