import styles from "./Tabs.module.scss"

const Tabs = ({discription, country, fabrics}) => {
    
    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.btn}>Описание</p>
                <p>{discription}</p>
            </div>
        </>
  )
}

export { Tabs }