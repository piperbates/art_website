/* eslint-disable import/no-unresolved */
import React from 'react';
import Link from 'next/link';
import PageLayout from '../layouts/PageLayout';
import ProjectLayout from '../layouts/ProjectLayout';
import styles from '../styles/ProjectLayout.module.css';
import { artData } from '../projects/illustrations';
import IllustrationBox from '../components/IllustrationBox';

const Illustration = () => (
  <PageLayout pageHeader='Illustration'>
    <div className={styles.projectIntro}>
      I am open for personal commissions! For more information, including pricing, see my <Link href='https://ko-fi.com/piperstrangeart/commissions' target="_blank">Commissions store</Link>.
    </div>

    <ProjectLayout>
      {artData.map((art, i) => <IllustrationBox image={art} key={i} />)}
    </ProjectLayout>

    <div className={styles.projectOutro}>
      <p>For more illustrations, including work in progress shots, check out my
        <Link href="http://www.instagram.com/piperstrangeart" target="_blank">Instagram</Link></p>
    </div>

  </PageLayout>
);

export default Illustration;
