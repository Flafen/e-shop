import styles from "./ProductPage.module.scss"
import "./sizes.scss"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { useSelector } from "react-redux";
import { addToCart, like } from "../../store/actions";

const ProductPage = ({}) => {
    const data = useSelector((state) => state.cardData.cards)
    const {gender, id} = useParams()    
    let current = data[gender][id]
    
    const handleLikeBtn = () => {
        like(gender, current.title)
    }
    
    if (!current) {
        console.log(data)
        return (
            <div className={styles.error}>
                <h1>Ничего не найдено...</h1>
            </div>
        )
    }

    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      });
    
    const [sizes, setSizes] = useState([
        {    
            id: 0,
            value: "S",
            active: true
        },
        {
            id: 1,
            value: "M",
            active: false
        },
        {
            id: 2,
            value: "L",
            active: false
        },
        {
            id: 3,
            value: "XL",
            active: false
        },
    ])

    const [activeSize, setActiveSize] = useState("S")
    function setActiveBtn(item) {
        let newSizes = sizes.map(size => size.id === item.id ? { ...size, active: true } : { ...size, active: false });
        setActiveSize(newSizes.find(item => item.active).value)
        setSizes(newSizes);
    }

    function handleCartDispatch() {
        addToCart(current.title, gender, activeSize)
      }
    
  return (
    <div className={styles.wrapper}>
        <img className={styles.photo} src={current.photo} alt="Product photo" />
        <div className={styles.discription}>
            <p className={styles.title}>{current.title}</p>
            <p className={styles.price}>{formatter.format(current.price)}</p>
            <p className={styles.size}>Размер</p>
            <div className={styles.sizeBtnWrapper}>
                {
                    sizes.map((item, i) => {
                        return (
                            <button 
                                className={`${styles.sizeBtn} ${item.active?"activeSize":""}`} 
                                onClick={()=>setActiveBtn(item)}
                                key={item.value}>{item.value}</button>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={handleCartDispatch} className={styles.purchaseBtn}>В корзину</button>
                <button onClick={handleLikeBtn} className={styles.likeBtn} >{current.liked?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</button>
            </div>
            <div className={styles.discriptionWrapper}>
            <p className={styles.discriptionTitle}>Описание</p>
            <p>{current.discription}</p>
        </div>
        </div>
        <div className={styles.discriptionWrapper2}>
            <p className={styles.discriptionTitle}>Описание</p>
            <p>{current.discription}</p>
        </div>
    </div>
  )
}

export { ProductPage }