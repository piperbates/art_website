import Image from 'next/image';
import styles from '../styles/Page.module.css'
import PageLayout from '../layouts/PageLayout';
import homeImg from '../images/selfportrait.png';

export default function Home() {
  return (
    <PageLayout pageHeader='Piper Strange Art'>
      <div className='wrapper'>
        <div className={styles.pageImageContainer}>
          <Image src={homeImg} alt="me" fill />
        </div>      

        <div className={styles.content}>
            Hello
        </div>
      </div>
    </PageLayout>
  )
}
