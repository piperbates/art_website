import React, { useEffect, useState } from 'react';
import styles from '@/styles/PageLayout.module.css';
import Link from 'next/link';
import phfont from '@/utils/phfont';
import SocialLinks from '@/components/SocialLinks';
import HeadMetaTags from '@/components/HeadMetaTags';

const PageLayout = ({pageHeader, children}: {
  pageHeader?: string, children: React.ReactNode
  }) => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisible = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScrollButtonVisible);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisible);
    };
  }, []);

  const onScrollClick = () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const toggleNavButtonDisplay = navigationOpen
    ? <p>X</p>
    : (
        <div><div className={styles.burger1}/>
          <div className={styles.burger2}/>
          <div className={styles.burger3}/>
        </div>
    );

  return (
  <div className={styles.container}>
      <HeadMetaTags />
      <div className={styles.headerBox}>
        <nav className={styles.navigation}>
          <button
            className={styles.toggleNavButton}
            onClick={
              () => setNavigationOpen(!navigationOpen)
            }>
            {toggleNavButtonDisplay}
          </button>

          <div className={`${navigationOpen ? styles.displayNav : styles.closeNav} ${styles.navigationBox} ${phfont.className}`}>
            <ul className={styles.navigationList}>
              <li onClick={() => setNavigationOpen(false)}><Link href='/'>Home</Link></li>
              <li onClick={() => setNavigationOpen(false)}><Link href='/about'>About</Link></li>
              <li onClick={() => setNavigationOpen(false)}><Link href='/books'>Books</Link></li>
              <li onClick={() => setNavigationOpen(false)}><Link href='/illustration'>Illustration</Link></li>
              <li onClick={() => setNavigationOpen(false)}><Link href='/comics'>Comics</Link></li>
              <li onClick={() => setNavigationOpen(false)}><Link href='/other'>Other</Link></li>
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

      {
        showButton && <button className={styles.topScrollButton} onClick={() => onScrollClick()}>
        &#8593;
      </button>
      }

      <div className={styles.footer}>
        <SocialLinks />
      </div>
    </div>
  );
};

export default PageLayout;
