import styles from "./FindPage.module.scss"
import { getFromLocalStorage } from "../ProductPage/ProductPage"

export function FindPage() {


    return (
        <>  
            <label htmlFor="search" className={styles.searchLabel}>Поиск</label>
        
            <form className={styles.searchBar}>
                <select className={styles.searchGender} id="gender">
                    <option value="men">Мужское</option>
                    <option value="women">Женское</option>
                </select>
                <input className={styles.searchInput} type="text" id="search" />
                <button className={styles.searchBtn} onClick={(e)=>{e.preventDefault()}} type="submit">Найти</button>
            </form>

            
        </>
    )
}