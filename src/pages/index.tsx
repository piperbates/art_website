import Image from 'next/image';
import styles from '../styles/Page.module.css'
import PageLayout from '../layouts/PageLayout';
import homeImg from '../images/selfportrait.png';

export default function Home() {
  return (
    <PageLayout pageHeader='Piper Strange Art'>
        <div className={styles.pageImageContainer}>
          <Image src={homeImg} alt="me" placeholder='blur' fill  />
        </div>      

        <div className={styles.content}>
          <h2>Welcome to the world of Piper Strange</h2>
            Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello Hello HelloHello Hello
        </div>
    </PageLayout>
  )
}
