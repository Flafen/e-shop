import styles from "./CartItem.module.scss"
import { Link } from "react-router-dom";
import { decreaseInCart, like } from "../../store/actions"
import { addToCart } from "../../store/actions"; 

export function CartItem({item, cards}) {

  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });

  let stateItem = cards[item.cardInfo.gender].find(card => card.title === item.cardInfo.title)
  
  function setLike() {
    like(item.cardInfo.gender, item.cardInfo.title)
  }

  function handleCartIncrease() {
    addToCart(item.cardInfo.title, item.cardInfo.gender, item.size)
  }

  function handleCartDecrease() {
    decreaseInCart(item.cardInfo.title, item.cardInfo.gender, item.size)
  }

  function handleDeleteCartItem() {
    decreaseInCart(item.cardInfo.title, item.cardInfo.gender, item.size, true)
  }
  
    return (
        <>
          <div className={styles.cardWrapper}>
            <Link to={`/Product/${item.cardInfo.gender}/${item.cardInfo.id}`} className={styles.imageLink}>
              <img className={styles.image} src={item.cardInfo.photo} alt="" />
            </Link>
            <div className={styles.infoBox}>
              <p className={styles.itemTitle}>{item.cardInfo.title}</p>
              <div className={styles.about}>
                <p>Страна: {item.cardInfo.country}</p>
                <p>Материал: {item.cardInfo.fabrics}</p>
                <p>Размер: {item.size}</p>
              </div>

              <p className={styles.price}>{formatter.format(item.cardInfo.price*item.amount)}</p>
              <div className={styles.counter}>
                <button onClick={handleCartDecrease} style={{borderRadius: "10px 0 0 10px"}}>-</button>
                <p>{item.amount}</p>
                <button onClick={handleCartIncrease} style={{borderRadius: "0 10px 10px 0"}}>+</button>
              </div>
              
              <div className={styles.cartItemFooter}>
                <div onClick={setLike} className={styles.like}>
                  {stateItem.liked?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}
                </div>
                <i onClick={handleDeleteCartItem} className={styles.delete}>&#10006;</i>
              </div>
            </div>
          </div>
        </>
    )
}