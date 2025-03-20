/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import PageLayout from '../layouts/PageLayout';
import phfont from '../utils/phfont';
import news from '../projects/news';

// Images
import homeImg from '../images/selfportrait.png';
import bun from '../images/bun.png';
import stickerClub from '../images/sticker-club.png';

import styles from '../styles/Page.module.css';

const Home = () => (
  <PageLayout pageHeader='Piper Strange Art'>

    <div className={styles.pageImageContainer}>
      <Image src={homeImg} alt="me" fill />
    </div>

    <div className={styles.content}>
      <div className={styles.introBox}>
        <h2 className={phfont.className}>Welcome to the world of Piper Strange</h2>
        <p>
          Hello, welcome to my website! I&apos;m Piper,
          a nonbinary illustrator and comic artist from the UK.
          I like to make things and then inflict them on people on the internet.
        </p>
        <Link href="https://ko-fi.com/piperstrangeart/tiers" target="_blank"><Image src={stickerClub} alt="An image advertising the Sticker Club" className={styles.homeBannerImg} width={400} /></Link>
      </div>

      <h2 className={phfont.className}>News</h2>
      <div className={styles.newsBox}>
        <span className={styles.newsDate}>20th March 2025</span>
        <p>
          {news}
        </p>
        <p>
          That&apos;s all for now!
        </p>
        <p>Piper x</p>
      </div>

      <div className={styles.bottomImageContainer}>
        <Image src={bun.src} alt="An illustration of a blue bunny with wings" fill />
      </div>
    </div>
  </PageLayout>
);

export default Home;
