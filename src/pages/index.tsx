import styles from '../styles/page.module.css'
import PageLayout from '../layouts/pageLayout'

import homeImg from '../images/bun.png'


export default function Home() {
  return (
    <PageLayout image={homeImg.src}>
      <main className={styles.main}>
        Home
      </main>

    </PageLayout>
  )
}
