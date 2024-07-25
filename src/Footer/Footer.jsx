import styles from "./Footer.module.scss"

export function Footer() {
    return (
      <div className={styles.footer__wrapper}>
        <h3>О магазине:</h3>
        <p className={styles.descrtiption}>Вы защищены от ответственности за убытки, возникшие в результате ошибок, допущенных нами, и можете требовать возмещения убытков, если они возникли в результате нашей небрежности. Вы можете отказаться от наших услуг, если они не соответствуют вашим требованиям, и мы будем вынуждены вернуть вам все деньги, которые вы заплатили за них.</p>
        <a href="#">Подробнее</a>
        <img className={styles.footer__logo} src="https://static.insales-cdn.com/files/1/6700/16398892/original/logo-stories.svg" alt="Мой интернет-магазин" title="Мой интернет-магазин"></img>
        <div className={styles.socials__wrapper}>
            <a href="#"><i className="fa-brands fa-telegram"></i></a>
            <a href="#"><i className="fa-brands fa-vk"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <p id={styles.copy}>© 2020 Любое использование контента без письменного разрешения запрещено</p>
      </div>
    )
}
