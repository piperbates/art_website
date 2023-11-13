/* eslint-disable import/no-unresolved */
import React from 'react';
import Link from 'next/link';
import PageLayout from '../layouts/PageLayout';
import ProjectLayout from '../layouts/ProjectLayout';
import styles from '../styles/ProjectLayout.module.css';
import { artData, tarotCards } from '../projects/illustrations';
import IllustrationBox from '../components/IllustrationBox';

const Illustration = () => {
  const sectionInfo = {
    standAlone: {
      title: 'Stand Alone Illustrations', id: 'stand-alone',
    },
    tarot: {
      title: 'Tarot Cards', id: 'tarot-cards',
    },
  };

  return (
    <PageLayout pageHeader='Illustration'>
        <div className={styles.projectIntro}>
          <p>Choose between the following options:</p>
        <ul>
          <li><Link href={`#${sectionInfo.standAlone.id}`}>{sectionInfo.standAlone.title}</Link></li>
          <li><Link href={`#${sectionInfo.tarot.id}`}>{sectionInfo.tarot.title}</Link></li>
        </ul>
        </div>

      <ProjectLayout pageInfo={sectionInfo.standAlone}>
      {artData.map((art, i) => <IllustrationBox image={art} key={i} />)}
      </ProjectLayout>

      <ProjectLayout pageInfo={sectionInfo.tarot}>
                {tarotCards.map((card, i) => <IllustrationBox image={ card} key={i} />)}
        </ProjectLayout>

        <div className={styles.projectOutro}>
      <p>For more illustrations, including work in progress shots, check out my
        <Link href="http://www.instagram.com/piperstrangeart" target="_blank">Instagram</Link></p>
      </div>

    </PageLayout>
  );
};

export default Illustration;
