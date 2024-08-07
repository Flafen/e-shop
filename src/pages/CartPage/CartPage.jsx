import { useSelector } from "react-redux"
import styles from "./CartPage.module.scss"
import { CartItem } from "./CartItem"

export function CartPage() {

    const data = useSelector(state => state.cardData)
    const isCartEmpty = data.cart.length;
    const totalAmount = data.cart.reduce((accum, item)=> accum + item.amount, 0);
    const total = data.cart.reduce((accum, item) => accum + item.amount*item.cardInfo.price, 0)
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      });

    return (
        isCartEmpty 
        ? <div className={styles.wrapper}>
            <h1 className={styles.header}>Корзина</h1>
            <div className={styles.cardContainer}>
                {data.cart.map((item) => <CartItem item={item} cards={data.cards} key={item.cardInfo.title+item.size} />)}
            </div>
            <div className={styles.calcContainer}>
                <h1 className={styles.headerCalcContainer}>Корзина</h1>
                <div className={styles.innerCalcContainer}>
                    <p className={styles.totalAmount}>Всего: {totalAmount} товар(ов)</p>
                    <div className={styles.horisontalLine}/>
                    <div className={styles.discount}>
                        <input className={styles.promocode} type="text" placeholder="Промокод"/>
                        <div className={styles.totalPriceContainer}>
                            <p className={styles.total}>Итого:</p>
                            <p className={styles.totalPrice}>{formatter.format(total)}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div> 
          : <div>
                <h1 className={styles.header}>Корзина</h1>
                <h2 style={{color:"#333", fontSize:"1.5rem", textAlign: "center", margin: "10% auto"}}>Корзина сейчас пуста...</h2>
            </div>
    )
}