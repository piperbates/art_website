import styles from '../styles/Comics.module.css'
import PageLayout from '../layouts/pageLayout'

import homeImg from '../images/bun.png'


export default function Home() {
  return (
    <PageLayout image={homeImg.src}>
        Comics
    </PageLayout>
  )
}
