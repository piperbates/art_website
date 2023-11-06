import Image from 'next/image';
import styles from '../styles/Page.module.css'
import PageLayout from '../layouts/PageLayout';
import homeImg from '../images/selfportrait.png';
import bun from '../images/bun.png';

export default function Home() {
  return (
    <PageLayout pageHeader='Piper Strange Art'>
        <div className={styles.pageImageContainer}>
          <Image src={homeImg} alt="me" placeholder='blur' fill  />
        </div>      

        <div className={styles.content}>
          <div className={styles.introBox}>
          <h2>Welcome to the world of Piper Strange</h2>
            <p>
              Hello, welcome to my portfolio! I&apos;m Piper, a nonbinary illustrator and comic artist from the UK. I like to make things and then inflict them on people on the internet. 
            </p>
          </div>
          <h2>News</h2>
          <div className={styles.newsBox}>
          <span className={styles.newsDate}>06th November 2023</span>
              <p>I&apos;m currently building This Website! Gosh!</p>
              <p>
                Actually something a little bit exciting is happening, I&apos;m in the process of republishing all my books, which is kind of why this website is necessary. I mean, it&apos;s not <em>completely</em> necessary, because most illustrator / author types don&apos;t have websites, they just have a thrown together Wix page but those are <em>boring</em>, I want weird websites with rambling news sections, and since my &ldquo;Real Job&ldquo; TM is a software engineer I figured why not build it myself?</p>
              <p>
                So yes that&apos;s why this website exists. Now you know!
              </p>
              <p>Piper x</p>
          </div>

          <div className={styles.bottomImageContainer}>
            <Image src={bun.src} alt="An illustration of a blue bunny with wings" fill/>
          </div>
        </div>
    </PageLayout>
  )
}
