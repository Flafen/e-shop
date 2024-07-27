import styles from "./ProductPage.module.scss"
import "./sizes.scss"
import { Tabs } from "./Tabs/Tabs";
import { useParams } from "react-router-dom"
import { useState } from "react";
import dataJson from '../../data.json';
import { useSelector } from "react-redux";

export function getFromLocalStorage(key) {
        if (key && localStorage.getItem(key)) {
          return JSON.parse(localStorage.getItem(key));
        }
        else {
            storedMen = dataJson.men;
            storedWomen = dataJson.women;
            return dataJson
        }
    }

const ProductPage = ({}) => {
    const data = useSelector((state) => state.cardData.cards)
    let storedMen = data.men;
    let storedWomen = data.women;
 
    const {gender, id} = useParams()

    let current = null
    if (gender === "men" && id<=storedMen.length) {
        current = storedMen[id]
    } else if (gender === "women") {
        current = storedWomen[id]
    } else {
        console.log(storedMen, "H")
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

    function setActiveBtn(item) {
        let newSizes = sizes.map(size => size.id === item.id ? { ...size, active: true } : { ...size, active: false });
        setSizes(newSizes);
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
                <button className={styles.purchaseBtn}>В корзину</button>
                <button className={styles.likeBtn} >{current.liked?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</button>
            </div>
            <Tabs discription={current.discription} country={current.country} fabrics={current.fabrics} />
        </div>
    </div>
  )
}

export { ProductPage }