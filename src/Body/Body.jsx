import { useSelector } from "react-redux";
import styles from "./Body.module.scss";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { getData } from "../store/actions";

export function Body() {
    const data = useSelector((state) => state.cardData.cards);

    useEffect(() => {
      if (!data.men || !data.women) {
        getData(); // Диспатчим действие getData при монтировании компонента
        console.log("useEffected!");
      }
    }, []);

  const markets = [
    "https://static.insales-cdn.com/r/VbDfycslrX0/rs:fit:500:500:1/plain/files/1/665/16630425/original/OZON_72d25ecdccb20a6da30882175ff85386.svg@svg",
    "https://static.insales-cdn.com/r/EfFX-k3xHvw/rs:fit:500:500:1/plain/files/1/667/16630427/original/WILDBERRIES_1d1acaf560b75cc441a1f3962a041aba.svg@svg",
    "https://static.insales-cdn.com/r/p-XXjOtlrgc/rs:fit:500:500:1/plain/files/1/706/16630466/original/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82_1e37154732d64395eb9b07670d398b56.svg@svg",
    "https://static.insales-cdn.com/r/0cyjKiQNkv4/rs:fit:500:500:1/plain/files/1/670/16630430/original/Avito_bf4f35811b0d01bc36a1d33cc67e33d6.svg@svg",
  ];

  const [gender, setGender] = useState("men");


  const windowWidth = window.screen.width
  let initialMaxNum;
if (windowWidth>1400) {
  initialMaxNum = 10;
} else if (windowWidth > 1200) {
  initialMaxNum = 8;
} else if (windowWidth > 480) {
  initialMaxNum = 6;
} else {
  initialMaxNum = 4;
}

  const [maxNum, setMaxNum] = useState(initialMaxNum);

  const [activated, setActivated] = useState(false);

  return (
    <div className={styles.bodyWrapper}>
      {/* Смена каталога */}
      <div>
        <button
          onClick={() => {
            setGender("men");
            setMaxNum(initialMaxNum);
            setActivated(false);
          }}
          className={gender === "men" ? `${styles.genderBtn} ${styles.activeBtn}` : `${styles.genderBtn}`}
        >
          Мужчинам
        </button>
        <button
          onClick={() => {
            setGender("women");
            setMaxNum(initialMaxNum);
            setActivated(false);
          }}
          className={gender === "women" ? `${styles.genderBtn} ${styles.activeBtn}` : `${styles.genderBtn}`}
        >
          Женщинам
        </button>
      </div>

      {/* список карточек товаров */}
      <div className={styles.container}>
        {data[gender]
          .slice(0, maxNum)
          .map((item) => {
            return (
              <Card item={item} gender={gender} key={item.title}></Card>
            );
          })}
      </div>

      <button
        className={`${styles.showMoreBtn} ${activated ? styles.activeShowMoreBtn : ""}`}
        onClick={() => {
          setMaxNum(data[gender].length);
          setActivated(true);
        }}
      >
        Показать еще...
      </button>

      <h2 className={styles.bottom}>Мы на маркетплейсах</h2>
      <div className={styles.marketplaces}>
        {markets.map((item) => {
          return <img key={item} src={item}></img>;
        })}
      </div>
    </div>
  );
}
