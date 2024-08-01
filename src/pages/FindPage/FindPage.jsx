import { useDispatch, useSelector } from "react-redux"
import styles from "./FindPage.module.scss"
import { useEffect, useState } from "react";
import { Card } from "../../Body/Card";

export function FindPage() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cardData.cards);
  
    useEffect(() => {
      dispatch({type: "getData"});      // Диспатчим действие getData при монтировании компонента
    }, [dispatch]);

    const filterFunction = (list) => list.filter(item => item.title.toLowerCase().includes(inputValue))

    const [inputValue, setInputValue] = useState("")
    const [gender, setGender] = useState('men');
  
    const handleChange = (e) => {setInputValue(e.target.value.toLowerCase())}
    const handleGenderChange = (e) => {
        setGender(e.target.value)
        setFilteredList(filterFunction(data[e.target.value]))
    };

    const submitInput = (e) => {
        e.preventDefault()
        setFilteredList(filterFunction(data[gender]))
    }

    return (
        <>  
            <label htmlFor="search" className={styles.searchLabel}>Поиск</label>
        
            <form onSubmit={submitInput} className={styles.searchBar}>
                <select className={styles.searchGender} id="gender" onChange={handleGenderChange}>
                    <option value="men">Мужское</option>
                    <option value="women">Женское</option>
                </select>
                <input
                    className={styles.searchInput}
                    onChange={handleChange}
                    type="text"
                    id="search"
                />
                <input className={styles.searchBtn} value="Поиск" type="submit" />
            </form>
            <h3>Результат поиска:</h3>
            <div className={styles.container}>
                {filterFunction(data[gender]).map((item) => <Card item={item} gender={gender} key={item.title} />)}
            </div>
        </>
    )
}