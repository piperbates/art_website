/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Page.module.css';
import PageLayout from '../layouts/PageLayout';
import homeImg from '../images/selfportrait.png';
import bun from '../images/bun.png';
import phfont from '../utils/phfont';

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
          </div>

          <h2 className={phfont.className}>News</h2>
          <div className={styles.newsBox}>
          <span className={styles.newsDate}>14th November 2023</span>
              <p>
                Something a little bit exciting is happening,
                I&apos;m in the process of republishing all my books!
                They&apos;ve been sold out for a while since I needed
                to edit the heck out of them for the new edition and I
                couldn&apos;t find the time to do it... Well I made the
                time and now they should be ready to be republished as soon
                as the final files are, err, finalised, ETA some time in
                the new year!
              </p>
              <p>
                And that&apos;s <em>exciting!!</em>
              </p>
              <p>Piper x</p>
          </div>

          <div className={styles.bottomImageContainer}>
            <Image src={bun.src} alt="An illustration of a blue bunny with wings" fill/>
          </div>
        </div>
    </PageLayout>
);

export default Home;
