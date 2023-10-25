import React from 'react'
import styles from  './Navbar.module.css'
import Logo from '../../assests/IGSTUDIO.png'

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
        <img src={Logo} alt='LawFirmLogo'/>
        <div className={styles.navWrapper2}>
            <p>Home</p>
            <p>Attroneys</p>
            <p>Practice Areas</p>
            <p>About us</p>
        </div>
        <div className={styles.navWrapper3}>
            Contact Now
        </div>
    </div>
  )
}

export default Navbar