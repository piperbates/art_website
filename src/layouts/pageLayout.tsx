"use client"; // This is a client component 👈🏽

import { useState } from 'react'
import styles from '../styles/PageLayout.module.css'
import Image from 'next/image'

const PageLayout = ({image, children}: {
    image: string, children: React.ReactNode
  }) => {
    
    const [navigationOpen, setNavigationOpen] = useState(false);

    return <div className={styles.container}>
      <header>
        <nav className={styles.navigation}>
          <button className={styles.toggleNavButton} onClick={() => setNavigationOpen(!navigationOpen)}>X</button>
          
          <div className={`${navigationOpen ? styles.displayNav : styles.closeNav} ${styles.navigationBox}`}>
            <ul className={styles.navigationList}>
              <li>
                <a href='#'>Home</a>
                <a href='#'>Books</a>
                <a href='#'>Comics</a>
                <a href='#'>Other</a>
              </li>
            </ul>

            <ul className={styles.socialsList}>
              <li>
                <a href='#'>insta</a>
                <a href='#'>ko-fi</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        {children}

        <div className={styles.imageContainer}>
          <Image src={image} alt="Home Image" 
            className={styles.pageImg} fill />
        </div>
    </div>
}

export default PageLayout