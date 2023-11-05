import Image from 'next/image'
import styles from '../styles/page.module.css'
import PageLayout from '@/components/pageLayout'

import homeImg from '../images/bun.png'

export default function Home() {
  return (
    <PageLayout>
      <main className={styles.main}>
        <Image src={homeImg} alt="Home Image" 
          className={styles.homeImg} />
        Hello World
      </main>

    </PageLayout>
  )
}
