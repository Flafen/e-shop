import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export function Header({setModalActive}) {

    return (
    <>
    <div className={styles.header}>
        <button onClick={()=>{setModalActive(true)}} href='#' className={styles.menuBar}>
            <i className="fa-solid fa-bars"></i>
            <h2>меню</h2>
        </button>
        
        <Link className={styles.logo} to="/">
            <svg width="236" height="50" viewBox="0 0 236 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M85.3647 20.4205C84.9696 20.2278 84.4478 20.0097 83.7994 19.7663C83.151 19.5228 82.4164 19.2946 81.5957 19.0816C80.7751 18.8585 79.8835 18.6759 78.921 18.5339C77.9585 18.3817 76.9706 18.3057 75.9574 18.3057C75.1469 18.3057 74.4529 18.331 73.8754 18.3817C73.308 18.4325 72.8267 18.4984 72.4316 18.5795C72.0466 18.6607 71.7376 18.757 71.5046 18.8686C71.2817 18.97 71.1094 19.0765 70.9878 19.1881C70.8663 19.2997 70.7852 19.4112 70.7447 19.5228C70.7143 19.6344 70.6991 19.7358 70.6991 19.8271C70.6991 20.1314 70.8511 20.4002 71.155 20.6335C71.459 20.8566 71.8744 21.0595 72.4012 21.242C72.9281 21.4145 73.541 21.5818 74.2401 21.7441C74.9392 21.8963 75.6788 22.0586 76.459 22.231C77.2492 22.3933 78.0598 22.5758 78.8906 22.7787C79.7315 22.9714 80.542 23.1996 81.3222 23.4633C82.1125 23.7271 82.8571 24.0364 83.5562 24.3914C84.2553 24.7363 84.8683 25.142 85.3951 25.6086C85.922 26.0752 86.3374 26.6127 86.6413 27.2213C86.9453 27.8299 87.0973 28.5247 87.0973 29.3057C87.0973 30.3098 86.92 31.172 86.5654 31.8921C86.2107 32.6123 85.7346 33.2208 85.1368 33.7178C84.5491 34.2148 83.8652 34.6155 83.0851 34.9198C82.305 35.2139 81.4843 35.4421 80.6231 35.6044C79.772 35.7667 78.9058 35.8732 78.0243 35.9239C77.153 35.9746 76.3222 36 75.5319 36C73.465 36 71.5502 35.8276 69.7872 35.4827C68.0344 35.148 66.4843 34.7271 65.1368 34.2199V29.2296C66.5248 30.0005 68.1054 30.604 69.8784 31.0401C71.6616 31.4763 73.5664 31.6943 75.5927 31.6943C76.7882 31.6943 77.7609 31.6335 78.5106 31.5118C79.2705 31.3799 79.8632 31.2176 80.2888 31.0249C80.7143 30.822 81.003 30.604 81.155 30.3707C81.307 30.1374 81.383 29.9142 81.383 29.7012C81.383 29.3665 81.231 29.0775 80.9271 28.834C80.6231 28.5805 80.2077 28.3624 79.6809 28.1798C79.154 27.9871 78.541 27.8147 77.8419 27.6625C77.1429 27.5002 76.3982 27.343 75.6079 27.1909C74.8278 27.0286 74.0223 26.8562 73.1915 26.6736C72.3607 26.491 71.5502 26.278 70.7599 26.0346C69.9797 25.781 69.2401 25.4919 68.541 25.1674C67.8419 24.8326 67.229 24.4421 66.7021 23.9959C66.1753 23.5394 65.7599 23.0171 65.4559 22.4288C65.152 21.8303 65 21.1406 65 20.3596C65 19.4366 65.1621 18.6404 65.4863 17.971C65.8105 17.3015 66.2462 16.7335 66.7933 16.2669C67.3506 15.7902 67.9889 15.4048 68.7082 15.1107C69.4377 14.8165 70.2026 14.5883 71.003 14.426C71.8034 14.2637 72.614 14.1521 73.4347 14.0913C74.2553 14.0304 75.0355 14 75.7751 14C76.5856 14 77.4164 14.0406 78.2675 14.1217C79.1287 14.2029 79.9747 14.3195 80.8055 14.4716C81.6363 14.6136 82.4367 14.781 83.2067 14.9737C83.9868 15.1664 84.7062 15.3693 85.3647 15.5823V20.4205Z" fill="#1B2738"/>
    <path d="M104.149 19.0816V35.4371H98.5106V19.0816H89.6505V14.5325H113.024V19.0816H104.149Z" fill="#1B2738"/>
    <path d="M143.784 25C143.784 26.7953 143.455 28.3827 142.796 29.7621C142.138 31.1314 141.196 32.2775 139.97 33.2006C138.744 34.1236 137.254 34.8234 135.502 35.3001C133.759 35.7667 131.798 36 129.62 36C127.442 36 125.471 35.7667 123.708 35.3001C121.955 34.8234 120.461 34.1236 119.225 33.2006C117.989 32.2775 117.036 31.1314 116.368 29.7621C115.699 28.3827 115.365 26.7953 115.365 25C115.365 23.2047 115.699 21.6224 116.368 20.2531C117.036 18.8737 117.989 17.7225 119.225 16.7994C120.461 15.8764 121.955 15.1817 123.708 14.7151C125.471 14.2384 127.442 14 129.62 14C131.798 14 133.759 14.2384 135.502 14.7151C137.254 15.1817 138.744 15.8764 139.97 16.7994C141.196 17.7225 142.138 18.8737 142.796 20.2531C143.455 21.6224 143.784 23.2047 143.784 25ZM138.085 25C138.085 24.219 137.958 23.4431 137.705 22.6722C137.462 21.8912 137.021 21.1913 136.383 20.5726C135.755 19.9539 134.894 19.4518 133.799 19.0664C132.705 18.681 131.312 18.4882 129.62 18.4882C128.485 18.4882 127.487 18.5795 126.626 18.7621C125.765 18.9345 125.02 19.178 124.392 19.4924C123.764 19.8068 123.237 20.177 122.812 20.603C122.386 21.0189 122.047 21.4703 121.793 21.9571C121.54 22.4338 121.358 22.9359 121.246 23.4633C121.145 23.9806 121.094 24.4929 121.094 25C121.094 25.5173 121.145 26.0396 121.246 26.5671C121.358 27.0945 121.54 27.6017 121.793 28.0885C122.047 28.5652 122.386 29.0115 122.812 29.4274C123.237 29.8432 123.764 30.2084 124.392 30.5228C125.02 30.8271 125.765 31.0705 126.626 31.2531C127.487 31.4255 128.485 31.5118 129.62 31.5118C131.312 31.5118 132.705 31.319 133.799 30.9336C134.894 30.5482 135.755 30.0461 136.383 29.4274C137.021 28.8087 137.462 28.1139 137.705 27.343C137.958 26.562 138.085 25.781 138.085 25Z" fill="#1B2738"/>
    <path d="M168.131 19.2642C167.979 19.2135 167.756 19.1475 167.462 19.0664C167.178 18.9751 166.844 18.8889 166.459 18.8077C166.074 18.7165 165.648 18.6404 165.182 18.5795C164.726 18.5187 164.255 18.4882 163.769 18.4882C162.756 18.4882 161.809 18.615 160.927 18.8686C160.056 19.112 159.24 19.4417 158.48 19.8575C157.72 20.2633 157.011 20.7298 156.353 21.2573C155.704 21.7746 155.106 22.3071 154.559 22.8548V35.4371H148.921V14.5325H154.559V17.9253C155.238 17.4182 155.932 16.9313 156.641 16.4647C157.361 15.988 158.105 15.5671 158.875 15.2019C159.656 14.8368 160.476 14.5477 161.337 14.3347C162.199 14.1116 163.11 14 164.073 14C164.438 14 164.808 14.0203 165.182 14.0609C165.567 14.0913 165.937 14.1319 166.292 14.1826C166.657 14.2333 166.996 14.2891 167.31 14.3499C167.624 14.4108 167.898 14.4716 168.131 14.5325V19.2642Z" fill="#1B2738"/>
    <path d="M171.717 35.4371V14.5325H177.356V35.4371H171.717Z" fill="#1B2738"/>
    <path d="M207.188 34.4025C205.476 34.9705 203.764 35.3762 202.052 35.6196C200.35 35.8732 198.607 36 196.824 36C194.544 36 192.513 35.7566 190.729 35.2697C188.956 34.7727 187.462 34.0576 186.246 33.1245C185.03 32.1913 184.103 31.0503 183.465 29.7012C182.827 28.3522 182.508 26.8257 182.508 25.1217C182.508 23.5394 182.827 22.0738 183.465 20.7248C184.113 19.3656 185.025 18.189 186.201 17.195C187.386 16.1909 188.815 15.4099 190.486 14.852C192.158 14.284 194.022 14 196.079 14C197.974 14 199.706 14.2586 201.277 14.7759C202.857 15.2831 204.21 16.0387 205.334 17.0429C206.469 18.047 207.346 19.2845 207.964 20.7552C208.592 22.2259 208.906 23.9198 208.906 25.8368V27.2365H188.328C188.511 27.8958 188.81 28.4993 189.225 29.047C189.65 29.5947 190.223 30.0613 190.942 30.4468C191.662 30.8322 192.543 31.1314 193.587 31.3444C194.64 31.5574 195.897 31.6639 197.356 31.6639C198.389 31.6639 199.402 31.603 200.395 31.4813C201.388 31.3495 202.315 31.1821 203.176 30.9793C204.037 30.7663 204.813 30.533 205.502 30.2794C206.201 30.0258 206.763 29.7722 207.188 29.5187V34.4025ZM203.298 23.0982C203.247 22.5809 203.09 22.0484 202.827 21.5007C202.573 20.9428 202.168 20.4408 201.611 19.9945C201.054 19.5482 200.324 19.183 199.423 18.899C198.521 18.6049 197.396 18.4578 196.049 18.4578C194.782 18.4578 193.688 18.615 192.766 18.9295C191.844 19.2439 191.069 19.6344 190.441 20.101C189.823 20.5675 189.341 21.0696 188.997 21.6072C188.652 22.1448 188.43 22.6418 188.328 23.0982H203.298Z" fill="#1B2738"/>
    <path d="M233.267 20.4205C232.872 20.2278 232.351 20.0097 231.702 19.7663C231.054 19.5228 230.319 19.2946 229.498 19.0816C228.678 18.8585 227.786 18.6759 226.824 18.5339C225.861 18.3817 224.873 18.3057 223.86 18.3057C223.05 18.3057 222.356 18.331 221.778 18.3817C221.211 18.4325 220.729 18.4984 220.334 18.5795C219.949 18.6607 219.64 18.757 219.407 18.8686C219.184 18.97 219.012 19.0765 218.891 19.1881C218.769 19.2997 218.688 19.4112 218.647 19.5228C218.617 19.6344 218.602 19.7358 218.602 19.8271C218.602 20.1314 218.754 20.4002 219.058 20.6335C219.362 20.8566 219.777 21.0595 220.304 21.242C220.831 21.4145 221.444 21.5818 222.143 21.7441C222.842 21.8963 223.582 22.0586 224.362 22.231C225.152 22.3933 225.963 22.5758 226.793 22.7787C227.634 22.9714 228.445 23.1996 229.225 23.4633C230.015 23.7271 230.76 24.0364 231.459 24.3914C232.158 24.7363 232.771 25.142 233.298 25.6086C233.825 26.0752 234.24 26.6127 234.544 27.2213C234.848 27.8299 235 28.5247 235 29.3057C235 30.3098 234.823 31.172 234.468 31.8921C234.113 32.6123 233.637 33.2208 233.04 33.7178C232.452 34.2148 231.768 34.6155 230.988 34.9198C230.208 35.2139 229.387 35.4421 228.526 35.6044C227.675 35.7667 226.809 35.8732 225.927 35.9239C225.056 35.9746 224.225 36 223.435 36C221.368 36 219.453 35.8276 217.69 35.4827C215.937 35.148 214.387 34.7271 213.04 34.2199V29.2296C214.428 30.0005 216.008 30.604 217.781 31.0401C219.564 31.4763 221.469 31.6943 223.495 31.6943C224.691 31.6943 225.664 31.6335 226.413 31.5118C227.173 31.3799 227.766 31.2176 228.191 31.0249C228.617 30.822 228.906 30.604 229.058 30.3707C229.21 30.1374 229.286 29.9142 229.286 29.7012C229.286 29.3665 229.134 29.0775 228.83 28.834C228.526 28.5805 228.11 28.3624 227.584 28.1798C227.057 27.9871 226.444 27.8147 225.745 27.6625C225.046 27.5002 224.301 27.343 223.511 27.1909C222.73 27.0286 221.925 26.8562 221.094 26.6736C220.263 26.491 219.453 26.278 218.663 26.0346C217.882 25.781 217.143 25.4919 216.444 25.1674C215.745 24.8326 215.132 24.4421 214.605 23.9959C214.078 23.5394 213.663 23.0171 213.359 22.4288C213.055 21.8303 212.903 21.1406 212.903 20.3596C212.903 19.4366 213.065 18.6404 213.389 17.971C213.713 17.3015 214.149 16.7335 214.696 16.2669C215.253 15.7902 215.892 15.4048 216.611 15.1107C217.34 14.8165 218.105 14.5883 218.906 14.426C219.706 14.2637 220.517 14.1521 221.337 14.0913C222.158 14.0304 222.938 14 223.678 14C224.488 14 225.319 14.0406 226.17 14.1217C227.031 14.2029 227.877 14.3195 228.708 14.4716C229.539 14.6136 230.339 14.781 231.109 14.9737C231.89 15.1664 232.609 15.3693 233.267 15.5823V20.4205Z" fill="#1B2738"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1 25.0793C1 15.1961 9.03741 7.15869 18.9206 7.15869C28.8039 7.15869 36.8413 15.1961 36.8413 25.0793C36.8413 34.9626 28.8039 43 18.9206 43C9.03741 43 1 34.9626 1 25.0793ZM6.97354 25.0793C6.97354 31.6681 12.3318 37.0264 18.9206 37.0264C25.5095 37.0264 30.8677 31.6681 30.8677 25.0793C30.8677 18.4905 25.5095 13.1322 18.9206 13.1322C12.3318 13.1322 6.97354 18.4905 6.97354 25.0793Z" fill="#1B2738"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M38.4272 1C35.9004 1 33.8545 3.04893 33.8545 5.57275C33.8545 8.09657 35.9004 10.1485 38.4272 10.1485C40.9541 10.1485 43 8.09956 43 5.57275C43 3.04893 40.9541 1 38.4272 1Z" fill="#1B2738"/></svg>
        </Link>
        <nav className={styles.navBar}>
            <Link to="/FindPage" className={styles.navItem}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link className={styles.navItem} to="/Favorites">
                <i className="fa-solid fa-heart"></i>
            </Link>
            <Link className={styles.navItem} to="/CartPage">
                <i className="fa-solid fa-cart-shopping"></i>
            </Link>
        </nav>
    </div>
    </>
    )
  }
  
  