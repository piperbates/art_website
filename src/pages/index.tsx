import styles from '../styles/Page.module.css'
import PageLayout from '../layouts/PageLayout'

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
