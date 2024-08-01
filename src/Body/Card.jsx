import { useSelector, useDispatch } from "react-redux";
import styles from "./Card.module.scss"
import { Link } from "react-router-dom";

export function Card({item, gender}) {
  const data = useSelector((state) => state.cardData.cards);
  const dispatch = useDispatch()

  function setLike(e) {
    const targetId = e.target.closest("#heart-id").dataset.id;
    dispatch({type:"like", gender: gender, id: targetId})
  }

  return (
    <div className={styles.wrapper}>
      <div onClick={setLike} id="heart-id" data-id={item.title} className={styles.like}>
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