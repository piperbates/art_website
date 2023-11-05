import styles from '../styles/Home.module.css'
import PageLayout from '../layouts/pageLayout'

import homeImg from '../images/bun.png'


export default function Home() {
  return (
    <PageLayout image={homeImg.src}>
      <main className={styles.main}>
        Main Content
      </main>

    </PageLayout>
  )
}
