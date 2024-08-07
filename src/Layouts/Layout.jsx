import styles from "./Layout.module.scss"
import { Link, Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Modal } from "../Modal/Modal"
import { useState } from "react"


export const Layout = () => {

  const handleModalOpen = () => {
    setModalActive(true)
    const list = document.getElementById("nav_list")

    list.addEventListener("click", e => {
      const target = e.target
   
       if (target.tagName != "A") {
         return
       } else {
         setModalActive(false)
       }
      })
  }

  const  [modalActive, setModalActive] = useState(false)
  return (
    <>
      <Header setModalActive={handleModalOpen}/>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <h1>МЕНЮ</h1>
        <div className="menu__nav-bar" id="nav_list">
          <Link className={styles.link} to={`/`}>Каталог</Link>
          <a>О компании</a>
          <a>Контакты</a>
          <a>Доставка</a>
          <a>Оплата</a>
        </div>

        <div>
          <h2>Контакты</h2>
          <h3>+7 (800) 999-93-39</h3>
          <h3>г. Москва, ул. Новослободская, 18, стр. 6</h3>
        </div>
      </Modal>
      <div className={styles.layoutWrapper}>
          <Outlet />
      </div>
      <Footer />
    </>
  )
}
