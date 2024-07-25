import styles from "./Layout.module.scss"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Modal } from "../Modal/Modal"
import { useState } from "react"


export const Layout = () => {

  const  [modalActive, setModalActive] = useState(false)

  return (
    <>
      <Header setModalActive={setModalActive}/>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
      <h1>МЕНЮ</h1>
      <div className="menu__nav-bar">
        <a>Каталог</a>
        <a>О компании</a>
        <a>Контакты</a>
        <a>Доставка</a>
        <a>Оплата</a>
      </div>

      <h2>Контакты</h2>
      <h3>+7 (800) 999-93-39</h3>
      <h3>г. Москва, ул. Новослободская, 18, стр. 6</h3>

      <div> {/* Соц. Сети */}

      </div>
      </Modal>
      <div className={styles.layoutWrapper}>
          <Outlet />
      </div>
      <Footer />
    </>
  )
}
