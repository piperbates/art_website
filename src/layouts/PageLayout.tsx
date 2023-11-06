import { useEffect, useState } from 'react'
import styles from '../styles/PageLayout.module.css'
import Link from 'next/link'
import SocialLinks from '@/components/SocialLinks'
import { Patrick_Hand } from 'next/font/google'

const phfont = Patrick_Hand({
  weight: ["400"],
  subsets: ['latin'],
})

const PageLayout = ({pageHeader, children}: {
  pageHeader?: string, children: React.ReactNode
  }) => {  

    const [navigationOpen, setNavigationOpen] = useState<boolean>(false);
    
    const onScrollClick = () => {
      return window.scrollTo({
        top:0, 
        behavior: 'smooth'
      })
    }

    return (<div className={styles.container}>
      <div className={styles.headerBox}>
        <nav className={styles.navigation}>
          <button className={styles.toggleNavButton} onClick={() => setNavigationOpen(!navigationOpen)}>X</button>
          
          <div className={`${navigationOpen ? styles.displayNav : styles.closeNav} ${styles.navigationBox} ${phfont.className}`}>
            <ul className={styles.navigationList}>
              <li onClick={()=>setNavigationOpen(false)}><Link href='/'>Home</Link></li>
              <li onClick={()=>setNavigationOpen(false)}><Link href='/about'>About</Link></li>
              <li onClick={()=>setNavigationOpen(false)}><Link href='/books'>Books</Link></li>
              <li onClick={()=>setNavigationOpen(false)}><Link href='/comics'>Comics</Link></li>
              <li onClick={()=>setNavigationOpen(false)}><Link href='/other'>Other</Link></li>
            </ul>

            <ul className={styles.socialsList}>
              <li>
                <SocialLinks />
              </li>
            </ul>
          </div>
        </nav>
        <header className={styles.header}>
          <h1 className={phfont.className}>{pageHeader}</h1>
        </header>
      </div>


      <div className={styles.mainContent}>
        {children}
      </div>

      <button className={styles.topScrollButton} onClick={()=>onScrollClick()}>
        &#8593;
      </button>

      <div className={styles.footer}>
        <SocialLinks />
      </div>
    </div>)
}

export default PageLayout
