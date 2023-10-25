import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assests/Hero Image.png'

const HeroSection = () => {

    let handleClick = (e) => {
        e.preventDefault();
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.herotab}>
            <div>
                <h1>You don’t have to</h1>
                <h1>Fight them Alone.</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,</p>
                <p> curabitur sodales conubia ut inceptos faucibus himenaeos tortor</p>
                <p> eget, hac massa gravida arcu interdum proin curae.</p>
            </div>
            <div className={styles.herotab3}>
                <form >
                    <input type='text' placeholder='Enter email address' className={styles.herotab3Input}/>
                    <button type='submit' className={styles.herotab3Button}  onClick={handleClick}>Let's Talk</button>
                </form>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt='Hero' width={471}/>
        </div>
    </div>
  )
}

export default HeroSection