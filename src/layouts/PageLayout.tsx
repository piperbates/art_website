import { useState } from 'react'
import styles from '../styles/PageLayout.module.css'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'

const PageLayout = ({children}: {
    children: React.ReactNode
  }) => {
    
    const [navigationOpen, setNavigationOpen] = useState(false);

    return <div className={styles.container}>
      <header>
        <nav className={styles.navigation}>
          <button className={styles.toggleNavButton} onClick={() => setNavigationOpen(!navigationOpen)}>X</button>
          
          <div className={`${navigationOpen ? styles.displayNav : styles.closeNav} ${styles.navigationBox}`}>
            <ul className={styles.navigationList}>
              <li>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/books'>Books</Link>
                <Link href='/comics'>Comics</Link>
                <Link href='/other'>Other</Link>
              </li>
            </ul>

            <ul className={styles.socialsList}>
              <li>
                <SocialLinks />
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className={styles.imageContainer}>
          
          </div>
          <main>
            {children}
          </main>

          <div className={styles.footer}>
            <SocialLinks />
          </div>
        
    </div>
}

export default PageLayout
