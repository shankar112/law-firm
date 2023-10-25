import React from 'react'
import styles from './Section2Intro.module.css'

const Section2Intro = () => {
  return (
    <div className={styles.wrapper}>
        <div>
            <h1>Let's Introduce </h1>
            <h1>ourselves</h1>
        </div>
        <div className={styles.line}></div>
        <div>
            <div>
                <h3>Criminal Lawyer</h3>
            </div>
            <div className={styles.section2tab3}>
                <p>Amet minim mollit non deserunt ullamco est </p>
                <p>sit aliqua dolor do amet sint. Velit officia consequatduis </p>
                <p>enim velit mollit Exercitation.</p>
            </div>
        </div>
    </div>
  )
}

export default Section2Intro